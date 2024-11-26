// Generated from grammars/ListaComandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CommandsContext } from "./ListaComandosParser";
import { CommandContext } from "./ListaComandosParser";
import { Inserir_inicioCommandContext } from "./ListaComandosParser";
import { Inserir_fimCommandContext } from "./ListaComandosParser";
import { Inserir_aposCommandContext } from "./ListaComandosParser";
import { Remover_inicioCommandContext } from "./ListaComandosParser";
import { Remover_fimCommandContext } from "./ListaComandosParser";
import { Remover_elementoCommandContext } from "./ListaComandosParser";
import { Remover_posicaoCommandContext } from "./ListaComandosParser";
import { ValorContext } from "./ListaComandosParser";
import { PosicaoContext } from "./ListaComandosParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ListaComandosParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ListaComandosVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ListaComandosParser.commands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommands?: (ctx: CommandsContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.inserir_inicioCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInserir_inicioCommand?: (ctx: Inserir_inicioCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.inserir_fimCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInserir_fimCommand?: (ctx: Inserir_fimCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.inserir_aposCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInserir_aposCommand?: (ctx: Inserir_aposCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.remover_inicioCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemover_inicioCommand?: (ctx: Remover_inicioCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.remover_fimCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemover_fimCommand?: (ctx: Remover_fimCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.remover_elementoCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemover_elementoCommand?: (ctx: Remover_elementoCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.remover_posicaoCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemover_posicaoCommand?: (ctx: Remover_posicaoCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.valor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValor?: (ctx: ValorContext) => Result;

	/**
	 * Visit a parse tree produced by `ListaComandosParser.posicao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosicao?: (ctx: PosicaoContext) => Result;
}

