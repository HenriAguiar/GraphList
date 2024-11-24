// src/libs/ListaListener.ts

import { ListaComandosListener } from '../parser/ListaComandosListener';
import { Inserir_inicioCommandContext, Inserir_fimCommandContext, Inserir_aposCommandContext, Remover_inicioCommandContext, Remover_fimCommandContext, Remover_elementoCommandContext, Remover_posicaoCommandContext } from "../parser/ListaComandosParser";
import Ldse from './Ldse';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
export default class ListaListener implements ListaComandosListener {
  private lista: Ldse;

  constructor(lista: Ldse) {
    this.lista = lista;
    console.log("Listener iniciado");
    console.log(lista.getListaComIds());
  }

  // Métodos do listener alinhados com a gramática
  enterInserir_inicioCommand(ctx: Inserir_inicioCommandContext): void {
    console.log("Entrou em enterInserir_inicioCommand");
    console.log("Número de filhos no contexto:", ctx.childCount);

    // Verifica se ctx.valor() é acessível
    if (ctx.valor()) {
        const valor = this.getValor(ctx.valor());
        console.log(`Valor extraído: ${valor}`);
        this.lista.inserir_inicio(valor); // Chama o método com o valor correto
    } else {
        console.error("O valor do comando inserir_inicio não foi encontrado.");
    }

    // Debug: lista os filhos do contexto
    for (let i = 0; i < ctx.childCount; i++) {
        const child = ctx.getChild(i) as any;
        console.log(`Filho ${i}:`, child ? child.getText() : "Nulo");
    }
}

  enterInserir_fimCommand(ctx: Inserir_fimCommandContext): void {
    console.log("Entrou em enterInserir_fimCommand");
    const valor = this.getValor(ctx.valor());
    console.log(`Valor extraído: ${valor}`);
    this.lista.inserir_fim(valor);
  }

  enterInserir_aposCommand(ctx: Inserir_aposCommandContext): void {
    console.log("Entrou em enterInserir_aposCommand");
    const valorPivo = this.getValor(ctx.valor(0));
    const valorNovo = this.getValor(ctx.valor(1));
    console.log(`Valor pivo: ${valorPivo}, Valor novo: ${valorNovo}`);
    this.lista.inserir_apos(valorPivo, valorNovo);
  }

  enterRemover_inicioCommand(ctx: Remover_inicioCommandContext): void {
    console.log("Entrou em enterRemover_inicioCommand");
    this.lista.remover_inicio();
  }

  enterRemover_fimCommand(ctx: Remover_fimCommandContext): void {
    console.log("Entrou em enterRemover_fimCommand");
    this.lista.remover_fim();
  }

  enterRemover_elementoCommand(ctx: Remover_elementoCommandContext): void {
    console.log("Entrou em enterRemover_elementoCommand");
    const valor = this.getValor(ctx.valor());
    console.log(`Remover elemento: ${valor}`);
    this.lista.remover_elemento(valor);
  }

  enterRemover_posicaoCommand(ctx: Remover_posicaoCommandContext): void {
    console.log("Entrou em enterRemover_posicaoCommand");
    const posicao = parseInt(ctx.posicao().text, 10);
    console.log(`Remover posição: ${posicao}`);
    this.lista.remover_posicao(posicao);
  }

  // Métodos vazios para regras não implementadas
  enterEveryRule(ctx: any): void {}
  exitEveryRule(ctx: any): void {}
  visitTerminal(node: any): void {}
  visitErrorNode(node: any): void {}

  // Método auxiliar para extrair valores dos contextos
// Método auxiliar para extrair valores dos contextos
private getValor(ctx: any): any {
  console.log("getValor chamado com ctx:", ctx);

  // Verifica se ctx está presente
  if (!ctx) {
      console.error("Contexto inválido ou vazio.");
      return null;
  }

  try {
      // Verifica qual tipo de valor está presente no contexto
      if (ctx.IDENTIFIER) {
          console.log("Identificador encontrado:", ctx.IDENTIFIER().text);
          return ctx.IDENTIFIER().text;
      } else if (ctx.NUMBER) {
          console.log("Número encontrado:", ctx.NUMBER().text);
          return parseInt(ctx.NUMBER().text, 10);
      } else if (ctx.STRING) {
          const text = ctx.STRING().text;
          console.log("String encontrada:", text);
          return text.substring(1, text.length - 1); // Remove as aspas
      }
  } catch (e) {
      console.error("Erro ao acessar o contexto:", e);
  }

  console.error("Nenhum valor correspondente encontrado no contexto.");
  return null;
}


}
