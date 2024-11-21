// Generated from grammars/Commands.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CommandsContext } from "./CommandsParser";
import { CommandContext } from "./CommandsParser";
import { InserirInicioContext } from "./CommandsParser";
import { InserirFimContext } from "./CommandsParser";
import { RemoverInicioContext } from "./CommandsParser";
import { RemoverFimContext } from "./CommandsParser";
import { RemoverElementoContext } from "./CommandsParser";
import { InserirAposContext } from "./CommandsParser";
import { RemoverPosicaoContext } from "./CommandsParser";
import { ValorContext } from "./CommandsParser";
import { ValorPivoContext } from "./CommandsParser";
import { PosicaoContext } from "./CommandsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CommandsParser`.
 */
export interface CommandsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CommandsParser.commands`.
	 * @param ctx the parse tree
	 */
	enterCommands?: (ctx: CommandsContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.commands`.
	 * @param ctx the parse tree
	 */
	exitCommands?: (ctx: CommandsContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.inserirInicio`.
	 * @param ctx the parse tree
	 */
	enterInserirInicio?: (ctx: InserirInicioContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.inserirInicio`.
	 * @param ctx the parse tree
	 */
	exitInserirInicio?: (ctx: InserirInicioContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.inserirFim`.
	 * @param ctx the parse tree
	 */
	enterInserirFim?: (ctx: InserirFimContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.inserirFim`.
	 * @param ctx the parse tree
	 */
	exitInserirFim?: (ctx: InserirFimContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.removerInicio`.
	 * @param ctx the parse tree
	 */
	enterRemoverInicio?: (ctx: RemoverInicioContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.removerInicio`.
	 * @param ctx the parse tree
	 */
	exitRemoverInicio?: (ctx: RemoverInicioContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.removerFim`.
	 * @param ctx the parse tree
	 */
	enterRemoverFim?: (ctx: RemoverFimContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.removerFim`.
	 * @param ctx the parse tree
	 */
	exitRemoverFim?: (ctx: RemoverFimContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.removerElemento`.
	 * @param ctx the parse tree
	 */
	enterRemoverElemento?: (ctx: RemoverElementoContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.removerElemento`.
	 * @param ctx the parse tree
	 */
	exitRemoverElemento?: (ctx: RemoverElementoContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.inserirApos`.
	 * @param ctx the parse tree
	 */
	enterInserirApos?: (ctx: InserirAposContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.inserirApos`.
	 * @param ctx the parse tree
	 */
	exitInserirApos?: (ctx: InserirAposContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.removerPosicao`.
	 * @param ctx the parse tree
	 */
	enterRemoverPosicao?: (ctx: RemoverPosicaoContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.removerPosicao`.
	 * @param ctx the parse tree
	 */
	exitRemoverPosicao?: (ctx: RemoverPosicaoContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.valor`.
	 * @param ctx the parse tree
	 */
	enterValor?: (ctx: ValorContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.valor`.
	 * @param ctx the parse tree
	 */
	exitValor?: (ctx: ValorContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.valorPivo`.
	 * @param ctx the parse tree
	 */
	enterValorPivo?: (ctx: ValorPivoContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.valorPivo`.
	 * @param ctx the parse tree
	 */
	exitValorPivo?: (ctx: ValorPivoContext) => void;

	/**
	 * Enter a parse tree produced by `CommandsParser.posicao`.
	 * @param ctx the parse tree
	 */
	enterPosicao?: (ctx: PosicaoContext) => void;
	/**
	 * Exit a parse tree produced by `CommandsParser.posicao`.
	 * @param ctx the parse tree
	 */
	exitPosicao?: (ctx: PosicaoContext) => void;
}

