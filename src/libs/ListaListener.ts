// src/libs/ListaListener.ts

import { ListaComandosListener } from '../parser/ListaComandosListener';
import { Inserir_inicioCommandContext } from "../parser/ListaComandosParser";
import { Inserir_fimCommandContext } from "../parser/ListaComandosParser";
import { Inserir_aposCommandContext } from "../parser/ListaComandosParser";
import { Remover_inicioCommandContext } from "../parser/ListaComandosParser";
import { Remover_fimCommandContext } from "../parser/ListaComandosParser";
import { Remover_elementoCommandContext } from "../parser/ListaComandosParser";
import { Remover_posicaoCommandContext } from "../parser/ListaComandosParser";
import Ldse from './Ldse';

export default class ListaListener implements ListaComandosListener {
  private lista: Ldse;

  constructor(lista: Ldse) {
    this.lista = lista;
  }

  // Implementação dos métodos de entrada para cada comando
  enterInserirInicioCommand(ctx: Inserir_inicioCommandContext): void {
    const valor = this.getValor(ctx.valor());
    this.lista.inserir_inicio(valor);
  }

  enterInserirFimCommand(ctx: Inserir_fimCommandContext): void {
    const valor = this.getValor(ctx.valor());
    this.lista.inserir_fim(valor);
  }

  enterInserirAposCommand(ctx: Inserir_aposCommandContext): void {
    const valorPivo = this.getValor(ctx.valor(0));
    const valorNovo = ctx.valor().length > 1 ? this.getValor(ctx.valor(1)) : null;
    if (valorNovo !== null) {
      this.lista.inserir_apos(valorPivo, valorNovo);
    } else {
      console.warn(`Valor para inserir após ${valorPivo} não fornecido.`);
    }
  }

  enterRemoverInicioCommand(ctx: Remover_inicioCommandContext): void {
    this.lista.remover_inicio();
  }

  enterRemoverFimCommand(ctx: Remover_fimCommandContext): void {
    this.lista.remover_fim();
  }

  enterRemoverElementoCommand(ctx: Remover_elementoCommandContext): void {
    const valor = this.getValor(ctx.valor());
    this.lista.remover_elemento(valor);
  }

  enterRemoverPosicaoCommand(ctx: Remover_posicaoCommandContext): void {
    const posicao = parseInt(ctx.posicao().text, 10);
    this.lista.remover_posicao(posicao);
  }

  // Implementação vazia para métodos não utilizados
  enterEveryRule(ctx: any): void {}
  exitEveryRule(ctx: any): void {}
  visitTerminal(node: any): void {}
  visitErrorNode(node: any): void {}

  // Método auxiliar para extrair valores dos contextos
  private getValor(ctx: any): any {
    if (ctx.IDENTIFIER()) {
      return ctx.IDENTIFIER()!.text;
    } else if (ctx.NUMBER()) {
      return parseInt(ctx.NUMBER()!.text, 10);
    } else if (ctx.STRING()) {
      const text = ctx.STRING()!.text;
      return text.substring(1, text.length - 1); // Remove as aspas
    }
    return null;
  }
}
