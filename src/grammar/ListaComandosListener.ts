// Generated from grammars/ListaComandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CommandsContext } from "./ListaComandosParser";
import { CommandContext } from "./ListaComandosParser";
import { ValorContext } from "./ListaComandosParser";
import { PosicaoContext } from "./ListaComandosParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ListaComandosParser`.
 */
export interface ListaComandosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ListaComandosParser.commands`.
	 * @param ctx the parse tree
	 */
	enterCommands?: (ctx: CommandsContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.commands`.
	 * @param ctx the parse tree
	 */
	exitCommands?: (ctx: CommandsContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.valor`.
	 * @param ctx the parse tree
	 */
	enterValor?: (ctx: ValorContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.valor`.
	 * @param ctx the parse tree
	 */
	exitValor?: (ctx: ValorContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.posicao`.
	 * @param ctx the parse tree
	 */
	enterPosicao?: (ctx: PosicaoContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.posicao`.
	 * @param ctx the parse tree
	 */
	exitPosicao?: (ctx: PosicaoContext) => void;
}

