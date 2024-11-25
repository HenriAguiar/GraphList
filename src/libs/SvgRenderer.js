// src/libs/SvgRenderer.js

import { SVG } from '@svgdotjs/svg.js';

/**
 * @typedef {Object} NodeParams
 * @property {number} id - ID único do nó.
 * @property {any} valor - Valor do nó.
 * @property {number} x - Posição x do nó.
 * @property {number} y - Posição y do nó.
 */

/**
 * Renderizador SVG para visualizar a lista encadeada.
 */
const SvgRenderer = {
    container: null,
    nodes: [], // Lista de nós no canvas
    arrows: [], // Lista de setas no canvas

    /**
     * Inicializa o renderizador SVG dentro do contêiner especificado.
     * @param {string} containerId - ID do elemento DOM onde o SVG será renderizado.
     */
    init(containerId) {
        console.log(`SvgRenderer inicializado no contêiner: ${containerId}`);
        this.container = SVG().addTo(`#${containerId}`).size('100%', '100%');
        this.nodes = []; // Reinicia a lista de nós
        this.arrows = [];
    },

    /**
     * Cria um nó no SVG.
     * @param {NodeParams} params - Parâmetros do nó.
     */
    criarNo({ id, valor, x, y }) {
        console.log(`Criando nó: id=${id}, valor=${valor}, x=${x}, y=${y}`);
        // Cria o nó (círculo)
        const radius = 25; // Raio do círculo
        const rect = this.container.rect(2 * radius, radius * 2).attr({ x, y, rx: radius, ry: radius, fill: '#07c6ff' });

        // Ajuste do texto para centralização
        const text = this.container.text(valor.toString())
            .attr({
                x: x + radius - 5, // Centraliza horizontalmente
                y: y + radius - 5, // Centraliza verticalmente
                fontSize: 14,
                fontFamily: 'Arial',
                fill: 'white'
            });

        // Alinha o texto no centro do nó
        text.center(x + radius, y + radius);

        // Adiciona o nó à lista
        this.nodes.push({ id, rect, text, x, y });

        // Atualiza as conexões entre os nós
        if (this.nodes.length > 1) {
            this._createArrow(this.nodes[this.nodes.length - 2], this.nodes[this.nodes.length - 1]);
        }
    },

    /**
     * Remove um nó do SVG com base no ID.
     * @param {number} id - ID único do nó a ser removido.
     */
    removerNo(id) {
        //oi migo, aqui ele não tá removendo da lista, só mudei de cor, e acho (quase certeza) que é esse o b.o.
        // na hora de inserir fica tudo cagado
        // testa removendo todos os nós e depois inserindo tanto no inicio quanto no fim
        console.log(`Removendo nó com id=${id}`);
        const node = this.getNodeById(id);
        if (node) {
            node.rect.fill('#AAA'); // Cor apagada
            node.text.fill('#FFF'); // Texto apagado
        } else {
            console.warn(`Nó com id=${id} não encontrado.`);
        }
    },

    getNodeById(id) {
        // Lógica para buscar o nó pela ID no seu gráfico, provavelmente em um array ou mapa
        return this.nodes.find(node => node.id === id); // Se você armazenar os nós em um array `this.nodes`
    },


    mudarCorNo(id) {
        const node = this.getNodeById(id);
        if (node) {
            console.log(`Mudando cor do nó com id=${id}`);
            node.rect.fill('#AAA');
            node.text.fill('#FFF');
        }
    },


    /**
     * Cria uma seta entre dois nós.
     * @param {Object} fromNode - Nó de origem.
     * @param {Object} toNode - Nó de destino.
     */
    _createArrow(fromNode, toNode) {
        console.log(`Criando seta entre id=${fromNode.id} e id=${toNode.id}`);
        const fromX = fromNode.x + 50;
        const fromY = fromNode.y + 25;
        const toX = toNode.x;
        const toY = toNode.y + 25;

        // Alterando a cor da seta para branco
        const arrow = this.container.line(fromX, fromY, toX, toY).stroke({ width: 2, color: '#FFF' }); // cor alterada aqui
        const arrowHead = this.container
            .polygon(`${toX - 5},${toY - 5} ${toX},${toY} ${toX - 5},${toY + 5}`)
            .fill('#FFF');  // Cor da cabeça da seta também alterada para branco

        this.arrows.push({ arrow, arrowHead });
        toNode.arrow = { arrow, arrowHead };
    },


    /**
     * Recria as setas entre os nós após uma atualização.
     */

    //não tá fazendo a curva quando remove no meio
    _rebuildArrows() {
        console.log("Recriando todas as setas.");
    
        // Remove todas as setas existentes
        this.arrows.forEach((arrowObj) => {
            arrowObj.arrow.remove();
            arrowObj.arrowHead.remove();
        });
        this.arrows = [];
    
        // Obtém nós ativos (ignorando nós "apagados")
        const activeNodes = this.nodes.filter(node => node.rect.fill() !== "#AAA");
    
        // Recria as setas entre os nós ativos
        for (let i = 0; i < activeNodes.length - 1; i++) {
            this._createArrow(activeNodes[i], activeNodes[i + 1]);
        }
    }
    
    ,    

    /**
     * Atualiza as posições dos nós no SVG com base na lista atual.
     * @param {Array<{id: number, valor: any, x: number, y: number}>} listaComIds - Lista com IDs, valores e posições dos nós.
     */

    //essa aqui funciona quase topemente, mas não tá atualizando direito as setas
    atualizarPosicoes(listaComIds) {
        console.log("Atualizando posições com a lista:", listaComIds);
    
        const novosNos = []; // Rastreia os IDs dos nós ainda válidos
    
        listaComIds.forEach((item) => {
            const existente = this.nodes.find((node) => node.id === item.id);
    
            if (!existente) {
                // Cria um nó novo se não existir
                this.criarNo(item);
            } else {
                // Atualiza posição de nós existentes
                existente.rect.move(item.x, item.y);
                existente.text.center(item.x + 25, item.y + 25); // Centraliza texto no centro do nó
                existente.x = item.x;
                existente.y = item.y;
            }
    
            novosNos.push(item.id);
        });
    
        // Filtra os nós que não estão mais ativos
        this.nodes = this.nodes.filter((node) => {
            if (!novosNos.includes(node.id)) {
                // Nó não está mais na lista lógica, marca como removido
                this.mudarCorNo(node.id);
                return false; // Remove da lista visual ativa
            }
            return true; // Mantém o nó ativo
        });
    
        // Recria setas apenas entre nós ativos
        this._rebuildArrows();
    }
    ,
    
    


    /**
     * Limpa todos os nós e setas do SVG.
     */
    limpar() {
        console.log("Limpando SVG.");
        this.container.clear();
        this.nodes = [];
        this.arrows = [];
    },

    /**
     * Método auxiliar para executar ações específicas.
     * @param {string} action - Nome da ação a ser executada.
     * @param {any} params - Parâmetros necessários para a ação.
     */
    execute(action, params) {
        if (this[action] && typeof this[action] === 'function') {
            this[action](params);
        } else {
            console.error(`Ação "${action}" não está definida no SvgRenderer.`);
        }
    },
};

export default SvgRenderer;
