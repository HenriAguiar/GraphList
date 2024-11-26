// src/libs/Ldse.js

import Node from "./Node";

class Ldse {
  constructor(svgRenderer) {
    this.prim = this.ult = null;
    this.quant = 0;
    this.svgRenderer = svgRenderer;
    this.MAX_NODES = 8; // Definindo o limite máximo de nós
  }

  reset() {
    this.prim = this.ult = null;
    this.quant = 0;
    Node.latestId = 1;
  }

  getValores() {
    const valores = [];
    let aux = this.prim;
    while (aux !== null) {
      valores.push(aux.info);
      aux = aux.prox;
    }
    return valores;
  }

  async inserir_inicio(valor) {
    if (this.quant >= this.MAX_NODES) {
      console.error("Limite de 8 nós atingido. Não é possível adicionar mais nós.");
      return;
    }

    console.log(`Método inserir_inicio chamado com valor: ${valor}`);
    const novoNo = new Node(valor, this.prim);
    this.prim = novoNo;

    if (this.quant === 0) {
      this.ult = this.prim;
    }

    this.quant += 1;
    console.log(`Quantidade após inserir_inicio: ${this.quant}`);

    await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
  }

  async inserir_fim(valor) {
    if (this.quant >= this.MAX_NODES) {
      console.error("Limite de 8 nós atingido. Não é possível adicionar mais nós.");
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

    await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
  }

  async remover_inicio() {
    console.log(`Método remover_inicio chamado`);
    if (!this.prim) {
      console.error("Lista vazia. Nenhum nó para remover.");
      return;
    }

    const idRemovido = this.prim.id;

    if (this.quant === 1) {
      this.prim = null;
      this.ult = null;
    } else {
      this.prim = this.prim.prox;
    }

    this.quant -= 1;
    console.log("Quantidade após remover_inicio:", this.quant);

    await this.svgRenderer.removerNo(idRemovido);
    await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
  }

  async remover_fim() {
    console.log("Método remover_fim chamado");

    if (!this.prim) {
      console.error("Lista vazia. Nenhum nó para remover.");
      return;
    }

    let idRemovido;

    if (this.quant === 1) {
      idRemovido = this.prim.id;
      this.prim = null;
      this.ult = null;
    } else {
      let aux = this.prim;
      let ant = null;
      while (aux.prox !== null) {
        ant = aux;
        aux = aux.prox;
      }

      idRemovido = aux.id;
      ant.prox = null;
      this.ult = ant;
    }

    this.quant -= 1;
    console.log("Quantidade após remover_fim:", this.quant);

    await this.svgRenderer.removerNo(idRemovido);
    await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
  }

  async remover_elemento(valor) {
    console.log(`Método remover_elemento chamado com valor: ${valor}`);
    if (!this.prim) {
      console.error("Lista vazia. Nenhum elemento para remover.");
      return;
    }

    let ant = null;
    let aux = this.prim;
    let encontrado = false;

    while (aux !== null) {
      if (aux.info === valor) {
        console.log(`Removendo elemento com valor: ${valor}`);

        const idRemovido = aux.id;

        if (ant === null) {
          this.prim = aux.prox;
        } else {
          ant.prox = aux.prox;
        }

        if (aux === this.ult) {
          this.ult = ant;
        }

        this.quant -= 1;

        await this.svgRenderer.removerNo(idRemovido);
        await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        encontrado = true;
        break;
      }

      ant = aux;
      aux = aux.prox;
    }

    if (!encontrado) {
      console.error(`Elemento com valor=${valor} não encontrado.`);
    }
  }

  async remover_posicao(posicao) {
    console.log(`Método remover_posicao chamado com posicao: ${posicao}`);

    if (posicao >= this.quant || posicao < 0) {
      console.error(`Posição inválida: ${posicao}`);
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

    const idRemovido = aux.id;

    if (ant === null) {
      this.prim = aux.prox;
    } else {
      ant.prox = aux.prox;
    }

    if (aux === this.ult) {
      this.ult = ant;
    }

    this.quant -= 1;

    await this.svgRenderer.removerNo(idRemovido);
    await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
  }

  async inserir_apos(valorPivo, valor) {
    if (this.quant >= this.MAX_NODES) {
      console.error("Limite de 8 nós atingido. Não é possível adicionar mais nós.");
      return;
    }

    console.log(`Método inserir_apos chamado com valorPivo: ${valorPivo}, valorNovo: ${valor}`);
    let aux = this.prim;
    let encontrado = false;

    while (aux !== null) {
      if (aux.info === valorPivo) {
        const novoNo = new Node(valor, aux.prox);
        aux.prox = novoNo;

        if (aux === this.ult) {
          this.ult = novoNo;
        }

        this.quant += 1;
        console.log(`Quantidade após inserir_apos: ${this.quant}`);

        await this.svgRenderer.atualizarPosicoes(this.getListaComIds());
        encontrado = true;
        break;
      }
      aux = aux.prox;
    }

    if (!encontrado) {
      console.error(`Elemento com valor=${valorPivo} não encontrado.`);
    }
  }

  getListaComIds() {
    const lista = [];
    let aux = this.prim;
    let index = 0;
    const startX = 50;
    const spacing = 120;
    const y = 100;

    while (aux !== null) {
      const x = index * spacing + startX;
      lista.push({ id: aux.id, valor: aux.info, x, y });
      aux = aux.prox;
      index++;
    }
    return lista;
  }
}

export default Ldse;
