import Node from "./Node";
import SvgRenderer from "./SvgRenderer.js"; // Certifique-se de que o caminho está correto

class Ldse {
    /**
     * Cria uma nova instância de Ldse.
     * @param {SvgRenderer} svgRenderer - Instância de SvgRenderer para atualizar a visualização SVG.
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
        console.log('abacate');
        return valores;
    }

    inserir_inicio(valor) {
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
            this.svgRenderer.criarNo(this.prim.info, 0); // Atualiza a visualização
        } else {
            this.prim = new Node(valor, this.prim);
            this.svgRenderer.criarNo(this.prim.info, 0);
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        }
        this.quant += 1;
    }

    inserir_fim(valor) {
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
            this.svgRenderer.criarNo(this.ult.info, 0);
        } else {
            this.ult.prox = new Node(valor, null);
            this.ult = this.ult.prox;
            this.svgRenderer.criarNo(this.ult.info, this.quant);
        }
        this.quant += 1;
    }

    remover_inicio() {
        if (this.quant === 1) {
            this.svgRenderer.removerNo(this.prim.info);
            this.prim = this.ult = null;
        } else {
            this.svgRenderer.removerNo(this.prim.info);
            this.prim = this.prim.prox;
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        }
        this.quant -= 1;
    }

    remover_fim() {
        if (this.quant === 1) {
            this.svgRenderer.removerNo(this.ult.info);
            this.prim = this.ult = null;
        } else {
            let aux = this.prim;
            while (aux.prox !== this.ult) {
                aux = aux.prox;
            }
            this.svgRenderer.removerNo(this.ult.info);
            aux.prox = null;
            this.ult = aux;
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        }
        this.quant -= 1;
    }

    remover_elemento(valor) {
        if (!this.prim) return;
        if (this.prim.info === valor) {
            this.remover_inicio();
            return;
        }
        let no_primeiro = this.prim;
        let no_segundo = no_primeiro.prox;
        while (no_segundo !== null) {
            if (no_segundo.info === valor) {
                this.svgRenderer.removerNo(no_segundo.info);
                no_primeiro.prox = no_segundo.prox;
                if (no_segundo === this.ult) {
                    this.ult = no_primeiro;
                }
                this.quant -= 1;
                this.svgRenderer.atualizarPosicoes(this.getListaComIds());
                return;
            }
            no_primeiro = no_segundo;
            no_segundo = no_segundo.prox;
        }
    }

    inserir_apos(valorPivo, valor) {
        let no_primeiro = this.prim;
        let index = 0;
        while (no_primeiro !== null) {
            if (no_primeiro.info === valorPivo) {
                no_primeiro.prox = new Node(valor, no_primeiro.prox);
                this.svgRenderer.criarNo(valor, index + 1);
                this.quant += 1;
                if (no_primeiro === this.ult) {
                    this.ult = no_primeiro.prox;
                }
                this.svgRenderer.atualizarPosicoes(this.getListaComIds());
                return;
            }
            no_primeiro = no_primeiro.prox;
            index++;
        }
    }

    remover_posicao(posicao) {
        if (posicao > this.quant - 1 || posicao < 0 || this.quant === 0) {
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
            this.svgRenderer.removerNo(aux.info);
            ant.prox = aux.prox;
            this.quant -= 1;
            this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        }
    }

    /**
     * Obtém a lista atual com IDs e valores dos nós.
     * @returns {Array<{id: number, valor: any}>} - Lista dos nós com IDs e valores.
     */
    getListaComIds() {
        const lista = [];
        let aux = this.prim;
        while (aux !== null) {
            lista.push({ id: aux.id, valor: aux.info });
            aux = aux.prox;
        }
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
