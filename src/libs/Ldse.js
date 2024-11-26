// src/libs/Ldse.js

import Node from "./Node";
import SvgRenderer from "./SvgRenderer.js"; // Certifique-se de que o caminho está correto

class Ldse {
    /**
     * Cria uma nova instância de Ldse.
     * @param {typeof SvgRenderer} svgRenderer - Instância de SvgRenderer para atualizar a visualização SVG.
     */
    constructor(svgRenderer) {
        this.prim = this.ult = null;
        this.quant = 0;
        this.svgRenderer = svgRenderer; // Armazena a instância de SvgRenderer
    }

    /**
     * Obtém os valores atuais da lista encadeada.
     * @returns {any[]} - Array contendo os valores dos nós.
     */
    getValores() {
        const valores = [];
        let aux = this.prim;
        while (aux !== null) {
            valores.push(aux.info);
            aux = aux.prox;
        }
        console.log(this.getListaComIds());
        console.log('abacate');
        return valores;
    }

    inserir_inicio(valor) {
        if (this.quant >= 8) {
            console.warn("Limite de 8 nós atingido. Não é possível adicionar mais nós.");
            return;
        }
    
        console.log(`Método inserir_inicio chamado com valor: ${valor}`);
        const novoNo = new Node(valor, this.prim); // Cria o novo nó apontando para o atual primeiro nó
        this.prim = novoNo; // Atualiza o início da lista
    
        if (this.quant === 0) {
            // Caso especial: lista estava vazia
            this.ult = this.prim;
        }
    
        this.quant += 1; // Incrementa a contagem de nós
        console.log(`Quantidade após inserir_inicio: ${this.quant}`);
    
        // Atualiza visualização
        this.svgRenderer.atualizarPosicoes(this.getListaComIds());
    }        

    inserir_fim(valor) {
        if (this.quant >= 8) {
            console.warn("Limite de 8 nós atingido. Não é possível adicionar mais nós.");
            return;
        }
    
        console.log(`Método inserir_fim chamado com valor: ${valor}`);
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
        } else {
            this.ult.prox = new Node(valor, null);
            this.ult = this.ult.prox;
        }
    
        this.quant += 1;
        console.log(`Quantidade após inserir_fim: ${this.quant}`);
    
        // Atualiza visualização
        this.svgRenderer.atualizarPosicoes(this.getListaComIds());
    }    

    remover_inicio() {
        console.log(`Método remover_inicio chamado`);
        if (!this.prim) {
            console.warn("Lista vazia. Nenhum nó para remover.");
            return;
        }
    
        const idRemovido = this.prim.id;
    
        if (this.quant === 1) {
            // Caso especial: apenas um nó na lista
            this.prim = null;
            this.ult = null;
        } else {
            // Avança para o próximo nó
            this.prim = this.prim.prox;
        }
    
        this.quant -= 1;
        console.log("Quantidade após remover_inicio:", this.quant);
    
        // Atualiza visualização
        this.svgRenderer.removerNo(idRemovido);
        this.svgRenderer._rebuildArrows();
    }    
    
    remover_fim() {
        console.log("Método remover_fim chamado");

        if (this.quant === 1) {
            // Apenas um nó, muda sua cor e não remove.
            this.svgRenderer.mudarCorNo(this.prim.id);
        } else {
            let aux = this.prim;
            while (aux.prox !== this.ult) {
                aux = aux.prox; // Penúltimo nó
            }

            // Mude a cor do último nó
            this.svgRenderer.mudarCorNo(this.ult.id);

            // Atualize o último nó na lista
            this.ult = aux;
            this.ult.prox = null; // Remove a referência ao nó "removido" para parar as setas
        }

        this.quant -= 1; // Atualiza a quantidade, mas o nó permanece na lista.
        console.log("Quantidade após remover_fim:", this.quant);
        this.svgRenderer.atualizarPosicoes(this.getListaComIds());
    }

    remover_elemento(valor) {
        console.log(`Método remover_elemento chamado com valor: ${valor}`);
        if (!this.prim) {
            console.warn("Lista vazia. Nenhum elemento para remover.");
            return;
        }
    
        let ant = null;
        let aux = this.prim;
    
        while (aux !== null) {
            if (aux.info === valor) {
                console.log(`Removendo elemento com valor: ${valor}`);
    
                // Atualizar referências lógicas
                if (ant === null) {
                    // Caso especial: removendo o primeiro nó
                    this.prim = aux.prox;
                } else {
                    ant.prox = aux.prox;
                }
    
                if (aux === this.ult) {
                    // Caso especial: removendo o último nó
                    this.ult = ant;
                }
    
                this.quant -= 1;
    
                // Atualizar visualização
                this.svgRenderer.removerNo(aux.id); // Remove o nó e as setas que apontam para ele
                return;
            }
    
            ant = aux;
            aux = aux.prox;
        }
    
        console.warn(`Elemento com valor=${valor} não encontrado.`);
    }    
        
    inserir_apos(valorPivo, valor) {
        console.log(`Método inserir_apos chamado com valorPivo: ${valorPivo}, valorNovo: ${valor}`);
        let no_primeiro = this.prim;
        let index = 0;
        while (no_primeiro !== null) {
            if (no_primeiro.info === valorPivo) {
                no_primeiro.prox = new Node(valor, no_primeiro.prox);
                this.quant += 1;
                if (no_primeiro === this.ult) {
                    this.ult = no_primeiro.prox;
                }
                this.svgRenderer.atualizarPosicoes(this.getListaComIds());
                console.log(`Quantidade após inserir_apos: ${this.quant}`);
                return;
            }
            no_primeiro = no_primeiro.prox;
            index++;
        }
    }

    remover_posicao(posicao) {
        console.log(`Método remover_posicao chamado com posicao: ${posicao}`);
    
        if (posicao >= this.quant || posicao < 0) {
            console.warn(`Posição inválida: ${posicao}`);
            return;
        }
    
        let ant = null;
        let aux = this.prim;
        let i = 0;
    
        while (i !== posicao) {
            ant = aux;
            aux = aux.prox;
            i++;
        }
    
        console.log(`Removendo nó na posição ${posicao} com valor ${aux.info}`);
    
        // Atualiza referências
        if (ant === null) {
            // Caso especial: removendo o primeiro nó
            this.prim = aux.prox;
        } else {
            ant.prox = aux.prox;
        }
    
        if (aux === this.ult) {
            // Caso especial: removendo o último nó
            this.ult = ant;
        }
    
        this.quant -= 1;
    
        // Atualizar visualização
        this.svgRenderer.removerNo(aux.id); // Remove o nó e as setas que apontam para ele
    }    
        
    toArray() {
        const resultado = [];
        let atual = this.prim;
        while (atual) {
            resultado.push(atual.info);
            atual = atual.prox;
        }
        return resultado;
    }

    /**
     * Obtém a lista atual com IDs, valores e posições dos nós.
     * @returns {Array<{id: number, valor: any, x: number, y: number}>} - Lista dos nós com IDs, valores e posições.
     */
    getListaComIds() {
        const lista = [];
        let aux = this.prim;
        let index = 0;
        const startX = 50; // Posição inicial no eixo X
        const spacing = 120; // Espaçamento entre os nós
        const y = 100; // Posição constante no eixo Y

        while (aux !== null) {
            const x = index * spacing + startX;
            lista.push({ id: aux.id, valor: aux.info, x, y });
            aux = aux.prox;
            index++;
        }
        console.log("Lista com IDs:", lista);
        return lista;
    }

    /**
     * Exibe os valores da lista no console.
     */
    show() {
        let aux = this.prim;
        for (let i = 0; i < this.quant; i++) {
            console.log(aux.info);
            aux = aux.prox;
        }
    }
}

export default Ldse;
