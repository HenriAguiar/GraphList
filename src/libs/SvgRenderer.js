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
        // Cria o nó (retângulo)
        const rect = this.container.rect(50, 30).attr({ x, y, fill: '#88C' });
        const text = this.container.text(valor.toString()).attr({ x: x + 15, y: y + 5 });

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
        console.log(`Removendo nó com id=${id}`);
        const nodeIndex = this.nodes.findIndex((node) => node.id === id);
        if (nodeIndex !== -1) {
            const node = this.nodes[nodeIndex];
            if (node.rect) node.rect.remove();
            if (node.text) node.text.remove();
            if (node.arrow) {
                if (node.arrow.arrow) node.arrow.arrow.remove();
                if (node.arrow.arrowHead) node.arrow.arrowHead.remove();
            }
            this.nodes.splice(nodeIndex, 1);
            this._rebuildArrows();
        } else {
            console.warn(`Nó com id=${id} não encontrado.`);
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
        const fromY = fromNode.y + 15;
        const toX = toNode.x;
        const toY = toNode.y + 15;

        const arrow = this.container.line(fromX, fromY, toX, toY).stroke({ width: 2, color: '#000' });
        const arrowHead = this.container
            .polygon(`${toX - 5},${toY - 5} ${toX},${toY} ${toX - 5},${toY + 5}`)
            .fill('#000');

        this.arrows.push({ arrow, arrowHead });
        toNode.arrow = { arrow, arrowHead };
    },

    /**
     * Recria as setas entre os nós após uma atualização.
     */
    _rebuildArrows() {
        console.log("Recriando todas as setas.");
        // Remove todas as setas existentes
        this.arrows.forEach((arrowObj) => {
            arrowObj.arrow.remove();
            arrowObj.arrowHead.remove();
        });
        this.arrows = [];

        // Recria as setas com base na lista atual de nós
        for (let i = 0; i < this.nodes.length - 1; i++) {
            this._createArrow(this.nodes[i], this.nodes[i + 1]);
        }
    },

    /**
     * Atualiza as posições dos nós no SVG com base na lista atual.
     * @param {Array<{id: number, valor: any, x: number, y: number}>} listaComIds - Lista com IDs, valores e posições dos nós.
     */
    atualizarPosicoes(listaComIds) {
        console.log("Atualizando posições com a lista:", listaComIds);
        // Limpar o SVG e redesenhar todos os nós
        this.container.clear();
        this.nodes = [];
        this.arrows = [];

        listaComIds.forEach((item, index) => {
            this.criarNo(item); // item contém { id, valor, x, y }
        });
    },

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
