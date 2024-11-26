// Generated from grammars/ListaComandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `ListaComandosParser.inserir_inicioCommand`.
	 * @param ctx the parse tree
	 */
	enterInserir_inicioCommand?: (ctx: Inserir_inicioCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.inserir_inicioCommand`.
	 * @param ctx the parse tree
	 */
	exitInserir_inicioCommand?: (ctx: Inserir_inicioCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.inserir_fimCommand`.
	 * @param ctx the parse tree
	 */
	enterInserir_fimCommand?: (ctx: Inserir_fimCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.inserir_fimCommand`.
	 * @param ctx the parse tree
	 */
	exitInserir_fimCommand?: (ctx: Inserir_fimCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.inserir_aposCommand`.
	 * @param ctx the parse tree
	 */
	enterInserir_aposCommand?: (ctx: Inserir_aposCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.inserir_aposCommand`.
	 * @param ctx the parse tree
	 */
	exitInserir_aposCommand?: (ctx: Inserir_aposCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.remover_inicioCommand`.
	 * @param ctx the parse tree
	 */
	enterRemover_inicioCommand?: (ctx: Remover_inicioCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.remover_inicioCommand`.
	 * @param ctx the parse tree
	 */
	exitRemover_inicioCommand?: (ctx: Remover_inicioCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.remover_fimCommand`.
	 * @param ctx the parse tree
	 */
	enterRemover_fimCommand?: (ctx: Remover_fimCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.remover_fimCommand`.
	 * @param ctx the parse tree
	 */
	exitRemover_fimCommand?: (ctx: Remover_fimCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.remover_elementoCommand`.
	 * @param ctx the parse tree
	 */
	enterRemover_elementoCommand?: (ctx: Remover_elementoCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.remover_elementoCommand`.
	 * @param ctx the parse tree
	 */
	exitRemover_elementoCommand?: (ctx: Remover_elementoCommandContext) => void;

	/**
	 * Enter a parse tree produced by `ListaComandosParser.remover_posicaoCommand`.
	 * @param ctx the parse tree
	 */
	enterRemover_posicaoCommand?: (ctx: Remover_posicaoCommandContext) => void;
	/**
	 * Exit a parse tree produced by `ListaComandosParser.remover_posicaoCommand`.
	 * @param ctx the parse tree
	 */
	exitRemover_posicaoCommand?: (ctx: Remover_posicaoCommandContext) => void;

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

