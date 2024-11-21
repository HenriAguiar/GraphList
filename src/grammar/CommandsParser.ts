// Generated from grammars/Commands.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4";
import { ATNDeserializer } from "antlr4";
import { FailedPredicateException } from "antlr4";
import { NoViableAltException } from "antlr4";
import { Parser } from "antlr4";
import { ParserRuleContext } from "antlr4";
import { ParserATNSimulator } from "antlr4";
import { ParseTreeListener } from "antlr4";
import { ParseTreeVisitor } from "antlr4";
import { RecognitionException } from "antlr4";
import { RuleContext } from "antlr4";
//import { RuleVersion } from "antlr4";
import { TerminalNode } from "antlr4";
import { Token } from "antlr4";
import { TokenStream } from "antlr4";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";
import { CommandsListener } from "./CommandsListener";

export class CommandsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly NUMBER = 10;
	public static readonly WS = 11;
	public static readonly RULE_commands = 0;
	public static readonly RULE_command = 1;
	public static readonly RULE_inserirInicio = 2;
	public static readonly RULE_inserirFim = 3;
	public static readonly RULE_removerInicio = 4;
	public static readonly RULE_removerFim = 5;
	public static readonly RULE_removerElemento = 6;
	public static readonly RULE_inserirApos = 7;
	public static readonly RULE_removerPosicao = 8;
	public static readonly RULE_valor = 9;
	public static readonly RULE_valorPivo = 10;
	public static readonly RULE_posicao = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"commands", "command", "inserirInicio", "inserirFim", "removerInicio", 
		"removerFim", "removerElemento", "inserirApos", "removerPosicao", "valor", 
		"valorPivo", "posicao",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'inserir_inicio('", "')'", "'inserir_fim('", "'remover_inicio()'", 
		"'remover_fim()'", "'removerElemento('", "'inserir_apos('", "','", "'remover_posicao('",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CommandsParser._LITERAL_NAMES, CommandsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CommandsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Commands.g4"; }

	// @Override
	public get ruleNames(): string[] { return CommandsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CommandsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CommandsParser._ATN, this);
	}
	// @RuleVersion(0)
	public commands(): CommandsContext {
		let _localctx: CommandsContext = new CommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CommandsParser.RULE_commands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.command();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandsParser.T__0) | (1 << CommandsParser.T__2) | (1 << CommandsParser.T__3) | (1 << CommandsParser.T__4) | (1 << CommandsParser.T__5) | (1 << CommandsParser.T__6) | (1 << CommandsParser.T__8))) !== 0));
			this.state = 29;
			this.match(CommandsParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CommandsParser.RULE_command);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommandsParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.inserirInicio();
				}
				break;
			case CommandsParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
				this.inserirFim();
				}
				break;
			case CommandsParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 33;
				this.removerInicio();
				}
				break;
			case CommandsParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 34;
				this.removerFim();
				}
				break;
			case CommandsParser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 35;
				this.removerElemento();
				}
				break;
			case CommandsParser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 36;
				this.inserirApos();
				}
				break;
			case CommandsParser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 37;
				this.removerPosicao();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inserirInicio(): InserirInicioContext {
		let _localctx: InserirInicioContext = new InserirInicioContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CommandsParser.RULE_inserirInicio);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(CommandsParser.T__0);
			this.state = 41;
			this.valor();
			this.state = 42;
			this.match(CommandsParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inserirFim(): InserirFimContext {
		let _localctx: InserirFimContext = new InserirFimContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CommandsParser.RULE_inserirFim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(CommandsParser.T__2);
			this.state = 45;
			this.valor();
			this.state = 46;
			this.match(CommandsParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public removerInicio(): RemoverInicioContext {
		let _localctx: RemoverInicioContext = new RemoverInicioContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CommandsParser.RULE_removerInicio);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(CommandsParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public removerFim(): RemoverFimContext {
		let _localctx: RemoverFimContext = new RemoverFimContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CommandsParser.RULE_removerFim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(CommandsParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public removerElemento(): RemoverElementoContext {
		let _localctx: RemoverElementoContext = new RemoverElementoContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CommandsParser.RULE_removerElemento);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(CommandsParser.T__5);
			this.state = 53;
			this.valor();
			this.state = 54;
			this.match(CommandsParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inserirApos(): InserirAposContext {
		let _localctx: InserirAposContext = new InserirAposContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CommandsParser.RULE_inserirApos);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(CommandsParser.T__6);
			this.state = 57;
			this.valorPivo();
			this.state = 58;
			this.match(CommandsParser.T__7);
			this.state = 59;
			this.valor();
			this.state = 60;
			this.match(CommandsParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public removerPosicao(): RemoverPosicaoContext {
		let _localctx: RemoverPosicaoContext = new RemoverPosicaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CommandsParser.RULE_removerPosicao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(CommandsParser.T__8);
			this.state = 63;
			this.posicao();
			this.state = 64;
			this.match(CommandsParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valor(): ValorContext {
		let _localctx: ValorContext = new ValorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CommandsParser.RULE_valor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(CommandsParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valorPivo(): ValorPivoContext {
		let _localctx: ValorPivoContext = new ValorPivoContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CommandsParser.RULE_valorPivo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(CommandsParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public posicao(): PosicaoContext {
		let _localctx: PosicaoContext = new PosicaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CommandsParser.RULE_posicao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(CommandsParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rK\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03\x02" +
		"\x06\x02\x1C\n\x02\r\x02\x0E\x02\x1D\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02" +
		"\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x02\x02\x02E\x02\x1B\x03\x02\x02\x02\x04(\x03" +
		"\x02\x02\x02\x06*\x03\x02\x02\x02\b.\x03\x02\x02\x02\n2\x03\x02\x02\x02" +
		"\f4\x03\x02\x02\x02\x0E6\x03\x02\x02\x02\x10:\x03\x02\x02\x02\x12@\x03" +
		"\x02\x02\x02\x14D\x03\x02\x02\x02\x16F\x03\x02\x02\x02\x18H\x03\x02\x02" +
		"\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02" +
		"\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\x03\x02\x02" +
		"\x02\x1F \x07\x02\x02\x03 \x03\x03\x02\x02\x02!)\x05\x06\x04\x02\")\x05" +
		"\b\x05\x02#)\x05\n\x06\x02$)\x05\f\x07\x02%)\x05\x0E\b\x02&)\x05\x10\t" +
		"\x02\')\x05\x12\n\x02(!\x03\x02\x02\x02(\"\x03\x02\x02\x02(#\x03\x02\x02" +
		"\x02($\x03\x02\x02\x02(%\x03\x02\x02\x02(&\x03\x02\x02\x02(\'\x03\x02" +
		"\x02\x02)\x05\x03\x02\x02\x02*+\x07\x03\x02\x02+,\x05\x14\v\x02,-\x07" +
		"\x04\x02\x02-\x07\x03\x02\x02\x02./\x07\x05\x02\x02/0\x05\x14\v\x0201" +
		"\x07\x04\x02\x021\t\x03\x02\x02\x0223\x07\x06\x02\x023\v\x03\x02\x02\x02" +
		"45\x07\x07\x02\x025\r\x03\x02\x02\x0267\x07\b\x02\x0278\x05\x14\v\x02" +
		"89\x07\x04\x02\x029\x0F\x03\x02\x02\x02:;\x07\t\x02\x02;<\x05\x16\f\x02" +
		"<=\x07\n\x02\x02=>\x05\x14\v\x02>?\x07\x04\x02\x02?\x11\x03\x02\x02\x02" +
		"@A\x07\v\x02\x02AB\x05\x18\r\x02BC\x07\x04\x02\x02C\x13\x03\x02\x02\x02" +
		"DE\x07\f\x02\x02E\x15\x03\x02\x02\x02FG\x07\f\x02\x02G\x17\x03\x02\x02" +
		"\x02HI\x07\f\x02\x02I\x19\x03\x02\x02\x02\x04\x1D(";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CommandsParser.__ATN) {
			CommandsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CommandsParser._serializedATN));
		}

		return CommandsParser.__ATN;
	}

}

export class CommandsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CommandsParser.EOF, 0); }
	public command(): CommandContext[];
	public command(i: number): CommandContext;
	public command(i?: number): CommandContext | CommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandContext);
		} else {
			return this.getRuleContext(i, CommandContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_commands; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterCommands) {
			listener.enterCommands(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitCommands) {
			listener.exitCommands(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public inserirInicio(): InserirInicioContext | undefined {
		return this.tryGetRuleContext(0, InserirInicioContext);
	}
	public inserirFim(): InserirFimContext | undefined {
		return this.tryGetRuleContext(0, InserirFimContext);
	}
	public removerInicio(): RemoverInicioContext | undefined {
		return this.tryGetRuleContext(0, RemoverInicioContext);
	}
	public removerFim(): RemoverFimContext | undefined {
		return this.tryGetRuleContext(0, RemoverFimContext);
	}
	public removerElemento(): RemoverElementoContext | undefined {
		return this.tryGetRuleContext(0, RemoverElementoContext);
	}
	public inserirApos(): InserirAposContext | undefined {
		return this.tryGetRuleContext(0, InserirAposContext);
	}
	public removerPosicao(): RemoverPosicaoContext | undefined {
		return this.tryGetRuleContext(0, RemoverPosicaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_command; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
}


export class InserirInicioContext extends ParserRuleContext {
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_inserirInicio; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterInserirInicio) {
			listener.enterInserirInicio(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitInserirInicio) {
			listener.exitInserirInicio(this);
		}
	}
}


export class InserirFimContext extends ParserRuleContext {
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_inserirFim; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterInserirFim) {
			listener.enterInserirFim(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitInserirFim) {
			listener.exitInserirFim(this);
		}
	}
}


export class RemoverInicioContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_removerInicio; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterRemoverInicio) {
			listener.enterRemoverInicio(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitRemoverInicio) {
			listener.exitRemoverInicio(this);
		}
	}
}


export class RemoverFimContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_removerFim; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterRemoverFim) {
			listener.enterRemoverFim(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitRemoverFim) {
			listener.exitRemoverFim(this);
		}
	}
}


export class RemoverElementoContext extends ParserRuleContext {
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_removerElemento; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterRemoverElemento) {
			listener.enterRemoverElemento(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitRemoverElemento) {
			listener.exitRemoverElemento(this);
		}
	}
}


export class InserirAposContext extends ParserRuleContext {
	public valorPivo(): ValorPivoContext {
		return this.getRuleContext(0, ValorPivoContext);
	}
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_inserirApos; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterInserirApos) {
			listener.enterInserirApos(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitInserirApos) {
			listener.exitInserirApos(this);
		}
	}
}


export class RemoverPosicaoContext extends ParserRuleContext {
	public posicao(): PosicaoContext {
		return this.getRuleContext(0, PosicaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_removerPosicao; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterRemoverPosicao) {
			listener.enterRemoverPosicao(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitRemoverPosicao) {
			listener.exitRemoverPosicao(this);
		}
	}
}


export class ValorContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(CommandsParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_valor; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterValor) {
			listener.enterValor(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitValor) {
			listener.exitValor(this);
		}
	}
}


export class ValorPivoContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(CommandsParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_valorPivo; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterValorPivo) {
			listener.enterValorPivo(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitValorPivo) {
			listener.exitValorPivo(this);
		}
	}
}


export class PosicaoContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(CommandsParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandsParser.RULE_posicao; }
	// @Override
	public enterRule(listener: CommandsListener): void {
		if (listener.enterPosicao) {
			listener.enterPosicao(this);
		}
	}
	// @Override
	public exitRule(listener: CommandsListener): void {
		if (listener.exitPosicao) {
			listener.exitPosicao(this);
		}
	}
}


