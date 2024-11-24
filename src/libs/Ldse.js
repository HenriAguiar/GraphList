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
        console.log(`Método inserir_inicio chamado com valor: ${valor}`);
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
        } else {
            this.prim = new Node(valor, this.prim);
        }
        this.quant += 1;
        console.log(`Quantidade após inserir_inicio: ${this.quant}`);
        this.svgRenderer.atualizarPosicoes(this.getListaComIds());
    }

    inserir_fim(valor) {
        console.log(`Método inserir_fim chamado com valor: ${valor}`);
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
        } else {
            this.ult.prox = new Node(valor, null);
            this.ult = this.ult.prox;
        }
        this.quant += 1;
        console.log(`Quantidade após inserir_fim: ${this.quant}`);
        this.svgRenderer.atualizarPosicoes(this.getListaComIds());
    }

    remover_inicio() {
        console.log(`Método remover_inicio chamado`);
        if (this.quant === 1) {
            this.svgRenderer.removerNo(this.prim.id);
            this.prim = this.ult = null;
        } else {
            this.svgRenderer.removerNo(this.prim.id);
            this.prim = this.prim.prox;
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        }
        this.quant -= 1;
        console.log(`Quantidade após remover_inicio: ${this.quant}`);
    }

    remover_fim() {
        console.log(`Método remover_fim chamado`);
        if (this.quant === 1) {
            this.svgRenderer.removerNo(this.ult.id);
            this.prim = this.ult = null;
        } else {
            let aux = this.prim;
            while (aux.prox !== this.ult) {
                aux = aux.prox;
            }
            this.svgRenderer.removerNo(this.ult.id);
            aux.prox = null;
            this.ult = aux;
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        }
        this.quant -= 1;
        console.log(`Quantidade após remover_fim: ${this.quant}`);
    }

    remover_elemento(valor) {
        console.log(`Método remover_elemento chamado com valor: ${valor}`);
        if (!this.prim) return;
        if (this.prim.info === valor) {
            this.remover_inicio();
            return;
        }
        let no_primeiro = this.prim;
        let no_segundo = no_primeiro.prox;
        while (no_segundo !== null) {
            if (no_segundo.info === valor) {
                this.svgRenderer.removerNo(no_segundo.id);
                no_primeiro.prox = no_segundo.prox;
                if (no_segundo === this.ult) {
                    this.ult = no_primeiro;
                }
                this.quant -= 1;
                this.svgRenderer.atualizarPosicoes(this.getListaComIds());
                console.log(`Quantidade após remover_elemento: ${this.quant}`);
                return;
            }
            no_primeiro = no_segundo;
            no_segundo = no_segundo.prox;
        }
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
        if (posicao > this.quant - 1 || posicao < 0 || this.quant === 0) {
            console.warn(`Posição inválida: ${posicao}`);
            return;
        } else if (posicao === 0) {
            this.remover_inicio();
            return;
        } else if (posicao === this.quant - 1) {
            this.remover_fim();
            return;
        } else {
            let ant = null;
            let aux = this.prim;
            let i = 0;
            while (i !== posicao) {
                ant = aux;
                aux = aux.prox;
                i += 1;
            }
            this.svgRenderer.removerNo(aux.id);
            ant.prox = aux.prox;
            this.quant -= 1;
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
            console.log(`Quantidade após remover_posicao: ${this.quant}`);
        }
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
