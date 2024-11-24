import {
  Inserir_inicioCommandContext,
  Inserir_fimCommandContext,
  Inserir_aposCommandContext,
  Remover_inicioCommandContext,
  Remover_fimCommandContext,
  Remover_elementoCommandContext,
  Remover_posicaoCommandContext,
  ValorContext,
  PosicaoContext,
} from '../parser/ListaComandosParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import Ldse from './Ldse';
import { ListaComandosVisitor } from '../parser/ListaComandosVisitor';
export default class ListaVisitor implements ListaComandosVisitor<void> {
  private lista: Ldse;

  constructor(lista: Ldse) {
    this.lista = lista;
    console.log('Visitor iniciado');
  }

  // Implementação obrigatória do método visit
  visit(tree: ParseTree): void {
    tree.accept(this);
  }

  // Implementação obrigatória do método visitChildren
  visitChildren(node: ParseTree): void {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.getChild(i);
      if (child) {
        this.visit(child);
      }
    }
  }

  // Implementação obrigatória do método visitTerminal
  visitTerminal(node: TerminalNode): void {
    console.log('Visitando terminal:', node.text);
  }

  // Implementação obrigatória do método visitErrorNode
  visitErrorNode(node: ParseTree): void {
    console.error('Erro ao visitar nó:', node.text);
  }

  // Implementação dos métodos da gramática
  visitInserir_inicioCommand(ctx: Inserir_inicioCommandContext): void {
    console.log('Visitando inserir_inicioCommand');
    const valor = this.getValor(ctx.valor());
    console.log(`Valor extraído: ${valor}`);
    this.lista.inserir_inicio(valor);
  }

  visitInserir_fimCommand(ctx: Inserir_fimCommandContext): void {
    console.log('Visitando inserir_fimCommand');
    const valor = this.getValor(ctx.valor());
    console.log(`Valor extraído: ${valor}`);
    this.lista.inserir_fim(valor);
  }

  visitInserir_aposCommand(ctx: Inserir_aposCommandContext): void {
    console.log('Visitando inserir_aposCommand');
    const valorPivo = this.getValor(ctx.valor(0));
    const valorNovo = this.getValor(ctx.valor(1));
    console.log(`Valor pivo: ${valorPivo}, Valor novo: ${valorNovo}`);
    this.lista.inserir_apos(valorPivo, valorNovo);
  }

  visitRemover_inicioCommand(ctx: Remover_inicioCommandContext): void {
    console.log('Visitando remover_inicioCommand');
    this.lista.remover_inicio();
  }

  visitRemover_fimCommand(ctx: Remover_fimCommandContext): void {
    console.log('Visitando remover_fimCommand');
    this.lista.remover_fim();
  }

  visitRemover_elementoCommand(ctx: Remover_elementoCommandContext): void {
    console.log('Visitando remover_elementoCommand');
    const valor = this.getValor(ctx.valor());
    console.log(`Remover elemento: ${valor}`);
    this.lista.remover_elemento(valor);
  }

  visitRemover_posicaoCommand(ctx: Remover_posicaoCommandContext): void {
    console.log('Visitando remover_posicaoCommand');
    const posicao = parseInt(ctx.posicao().text, 10);
    console.log(`Remover posição: ${posicao}`);
    this.lista.remover_posicao(posicao);
  }

  // Método auxiliar para extrair valores
  private getValor(ctx: ValorContext): any {
    console.log('getValor chamado com ctx:', ctx);

    if (!ctx) {
      console.error('Contexto inválido ou vazio.');
      return null;
    }

    if (ctx.IDENTIFIER()) {
      console.log('Identificador encontrado:', ctx.IDENTIFIER()!.text);
      return ctx.IDENTIFIER()!.text;
    } else if (ctx.NUMBER()) {
      console.log('Número encontrado:', ctx.NUMBER()!.text);
      return parseInt(ctx.NUMBER()!.text, 10);
    } else if (ctx.STRING()) {
      const text = ctx.STRING()!.text;
      console.log('String encontrada:', text);
      return text.substring(1, text.length - 1); // Remove as aspas
    }

    console.error('Nenhum valor correspondente encontrado no contexto.');
    return null;
  }
}
