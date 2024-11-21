
import Node from "./Node";
class Ldse {
    constructor() {
        this.prim = this.ult = null;
        this.quant = 0;
    }

    inserir_inicio(valor) {
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
        } else {
            this.prim = new Node(valor, this.prim);
        }
        this.quant += 1;
    }

    inserir_fim(valor) {
        if (this.quant === 0) {
            this.prim = this.ult = new Node(valor, null);
        } else {
            this.ult.prox = new Node(valor, null);
            this.ult = this.ult.prox;
        }
        this.quant += 1;
    }

    show() {
        let aux = this.prim;
        for (let i = 0; i < this.quant; i++) {
            console.log(aux.info);
            aux = aux.prox;
        }
    }

    remover_inicio() {
        if (this.quant === 1) {
            this.prim = this.ult = null;
        } else {
            this.prim = this.prim.prox;
        }
        this.quant -= 1;
    }

    remover_fim() {
        if (this.quant === 1) {
            this.prim = this.ult = null;
        } else {
            let aux = this.prim;
            while (aux.prox !== this.ult) {
                aux = aux.prox;
            }
            aux.prox = null;
            this.ult = aux;
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
                no_primeiro.prox = no_segundo.prox;
                if (no_segundo === this.ult) {
                    this.ult = no_primeiro;
                }
                this.quant -= 1;
                return;
            }
            no_primeiro = no_segundo;
            no_segundo = no_segundo.prox;
        }
    }

    inserir_apos(valorPivo, valor) {
        let no_primeiro = this.prim;
        while (no_primeiro !== null) {
            if (no_primeiro.info === valorPivo) {
                no_primeiro.prox = new Node(valor, no_primeiro.prox);
                this.quant += 1;
                if (this.ult === no_primeiro) {
                    this.ult = no_primeiro.prox;
                }
                return;
            }
            no_primeiro = no_primeiro.prox;
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
            ant.prox = aux.prox;
            this.quant -= 1;
        }
    }
}
export default Ldse;
