// src/libs/ListaVisitor.ts

import {
  Inserir_inicioCommandContext,
  Inserir_fimCommandContext,
  Inserir_aposCommandContext,
  Remover_inicioCommandContext,
  Remover_fimCommandContext,
  Remover_elementoCommandContext,
  Remover_posicaoCommandContext,
  ValorContext,
  CommandsContext,
  CommandContext,
} from '../parser/ListaComandosParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import Ldse from './Ldse';
import { ListaComandosVisitor } from '../parser/ListaComandosVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

export default class ListaVisitor implements ListaComandosVisitor<Promise<void>> {
  private lista: Ldse;

  constructor(lista: Ldse) {
    this.lista = lista;
    console.log('Visitor iniciado');
  }

  async visit(tree: ParseTree): Promise<void> {
    await tree.accept(this);
  }

  async visitChildren(node: ParseTree): Promise<void> {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.getChild(i);
      if (child) {
        await child.accept(this);
      }
    }
  }

  async visitCommands(ctx: CommandsContext): Promise<void> {
    for (let i = 0; i < ctx.command().length; i++) {
      const commandCtx = ctx.command(i);
      await this.visit(commandCtx);
      await this.delay(500);
    }
  }

  async visitCommand(ctx: CommandContext): Promise<void> {
    await this.visitChildren(ctx);
  }

  async visitInserir_inicioCommand(ctx: Inserir_inicioCommandContext): Promise<void> {
    const valor = this.getValor(ctx.valor());
    await this.lista.inserir_inicio(valor);
  }

  async visitInserir_fimCommand(ctx: Inserir_fimCommandContext): Promise<void> {
    const valor = this.getValor(ctx.valor());
    await this.lista.inserir_fim(valor);
  }

  async visitInserir_aposCommand(ctx: Inserir_aposCommandContext): Promise<void> {
    const valorPivo = this.getValor(ctx.valor(0));
    const valorNovo = this.getValor(ctx.valor(1));
    await this.lista.inserir_apos(valorPivo, valorNovo);
  }

  async visitRemover_inicioCommand(ctx: Remover_inicioCommandContext): Promise<void> {
    await this.lista.remover_inicio();
  }

  async visitRemover_fimCommand(ctx: Remover_fimCommandContext): Promise<void> {
    await this.lista.remover_fim();
  }

  async visitRemover_elementoCommand(ctx: Remover_elementoCommandContext): Promise<void> {
    const valor = this.getValor(ctx.valor());
    await this.lista.remover_elemento(valor);
  }

  async visitRemover_posicaoCommand(ctx: Remover_posicaoCommandContext): Promise<void> {
    const posicao = parseInt(ctx.posicao().text, 10);
    await this.lista.remover_posicao(posicao);
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getValor(ctx: ValorContext): any {
    if (!ctx) {
      console.error('Contexto inválido ou vazio.');
      return null;
    }

    if (ctx.IDENTIFIER()) {
      return ctx.IDENTIFIER()!.text;
    } else if (ctx.NUMBER()) {
      return parseInt(ctx.NUMBER()!.text, 10);
    } else if (ctx.STRING()) {
      const text = ctx.STRING()!.text;
      return text.substring(1, text.length - 1);
    }

    console.error('Nenhum valor correspondente encontrado no contexto.');
    return null;
  }

  async visitTerminal(node: TerminalNode): Promise<void> {
    // Implementação vazia ou await alguma operação assíncrona se necessário
  }

  async visitErrorNode(node: ErrorNode): Promise<void> {
    console.error('Erro ao visitar nó:', node.text);
  }
}
