// Generated from grammars/ListaComandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ListaComandosListener } from "./ListaComandosListener";
import { ListaComandosVisitor } from "./ListaComandosVisitor";


export class ListaComandosParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly IDENTIFIER = 12;
	public static readonly NUMBER = 13;
	public static readonly STRING = 14;
	public static readonly WS = 15;
	public static readonly RULE_commands = 0;
	public static readonly RULE_command = 1;
	public static readonly RULE_inserir_inicioCommand = 2;
	public static readonly RULE_inserir_fimCommand = 3;
	public static readonly RULE_inserir_aposCommand = 4;
	public static readonly RULE_remover_inicioCommand = 5;
	public static readonly RULE_remover_fimCommand = 6;
	public static readonly RULE_remover_elementoCommand = 7;
	public static readonly RULE_remover_posicaoCommand = 8;
	public static readonly RULE_valor = 9;
	public static readonly RULE_posicao = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"commands", "command", "inserir_inicioCommand", "inserir_fimCommand", 
		"inserir_aposCommand", "remover_inicioCommand", "remover_fimCommand", 
		"remover_elementoCommand", "remover_posicaoCommand", "valor", "posicao",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'inserir_inicio'", "'('", "')'", "';'", "'inserir_fim'", "'inserir_apos'", 
		"','", "'remover_inicio'", "'remover_fim'", "'remover_elemento'", "'remover_posicao'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", "NUMBER", 
		"STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ListaComandosParser._LITERAL_NAMES, ListaComandosParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ListaComandosParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ListaComandos.g4"; }

	// @Override
	public get ruleNames(): string[] { return ListaComandosParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ListaComandosParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ListaComandosParser._ATN, this);
	}
	// @RuleVersion(0)
	public commands(): CommandsContext {
		let _localctx: CommandsContext = new CommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ListaComandosParser.RULE_commands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ListaComandosParser.T__0) | (1 << ListaComandosParser.T__4) | (1 << ListaComandosParser.T__5) | (1 << ListaComandosParser.T__7) | (1 << ListaComandosParser.T__8) | (1 << ListaComandosParser.T__9) | (1 << ListaComandosParser.T__10))) !== 0)) {
				{
				{
				this.state = 22;
				this.command();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this.match(ListaComandosParser.EOF);
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
		this.enterRule(_localctx, 2, ListaComandosParser.RULE_command);
		try {
			this.state = 37;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ListaComandosParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.inserir_inicioCommand();
				}
				break;
			case ListaComandosParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.inserir_fimCommand();
				}
				break;
			case ListaComandosParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 32;
				this.inserir_aposCommand();
				}
				break;
			case ListaComandosParser.T__7:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 33;
				this.remover_inicioCommand();
				}
				break;
			case ListaComandosParser.T__8:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 34;
				this.remover_fimCommand();
				}
				break;
			case ListaComandosParser.T__9:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 35;
				this.remover_elementoCommand();
				}
				break;
			case ListaComandosParser.T__10:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 36;
				this.remover_posicaoCommand();
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
	public inserir_inicioCommand(): Inserir_inicioCommandContext {
		let _localctx: Inserir_inicioCommandContext = new Inserir_inicioCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ListaComandosParser.RULE_inserir_inicioCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(ListaComandosParser.T__0);
			this.state = 40;
			this.match(ListaComandosParser.T__1);
			this.state = 41;
			this.valor();
			this.state = 42;
			this.match(ListaComandosParser.T__2);
			this.state = 43;
			this.match(ListaComandosParser.T__3);
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
	public inserir_fimCommand(): Inserir_fimCommandContext {
		let _localctx: Inserir_fimCommandContext = new Inserir_fimCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ListaComandosParser.RULE_inserir_fimCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(ListaComandosParser.T__4);
			this.state = 46;
			this.match(ListaComandosParser.T__1);
			this.state = 47;
			this.valor();
			this.state = 48;
			this.match(ListaComandosParser.T__2);
			this.state = 49;
			this.match(ListaComandosParser.T__3);
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
	public inserir_aposCommand(): Inserir_aposCommandContext {
		let _localctx: Inserir_aposCommandContext = new Inserir_aposCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ListaComandosParser.RULE_inserir_aposCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(ListaComandosParser.T__5);
			this.state = 52;
			this.match(ListaComandosParser.T__1);
			this.state = 53;
			this.valor();
			this.state = 54;
			this.match(ListaComandosParser.T__6);
			this.state = 55;
			this.valor();
			this.state = 56;
			this.match(ListaComandosParser.T__2);
			this.state = 57;
			this.match(ListaComandosParser.T__3);
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
	public remover_inicioCommand(): Remover_inicioCommandContext {
		let _localctx: Remover_inicioCommandContext = new Remover_inicioCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ListaComandosParser.RULE_remover_inicioCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(ListaComandosParser.T__7);
			this.state = 60;
			this.match(ListaComandosParser.T__1);
			this.state = 61;
			this.match(ListaComandosParser.T__2);
			this.state = 62;
			this.match(ListaComandosParser.T__3);
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
	public remover_fimCommand(): Remover_fimCommandContext {
		let _localctx: Remover_fimCommandContext = new Remover_fimCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ListaComandosParser.RULE_remover_fimCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(ListaComandosParser.T__8);
			this.state = 65;
			this.match(ListaComandosParser.T__1);
			this.state = 66;
			this.match(ListaComandosParser.T__2);
			this.state = 67;
			this.match(ListaComandosParser.T__3);
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
	public remover_elementoCommand(): Remover_elementoCommandContext {
		let _localctx: Remover_elementoCommandContext = new Remover_elementoCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ListaComandosParser.RULE_remover_elementoCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(ListaComandosParser.T__9);
			this.state = 70;
			this.match(ListaComandosParser.T__1);
			this.state = 71;
			this.valor();
			this.state = 72;
			this.match(ListaComandosParser.T__2);
			this.state = 73;
			this.match(ListaComandosParser.T__3);
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
	public remover_posicaoCommand(): Remover_posicaoCommandContext {
		let _localctx: Remover_posicaoCommandContext = new Remover_posicaoCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ListaComandosParser.RULE_remover_posicaoCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(ListaComandosParser.T__10);
			this.state = 76;
			this.match(ListaComandosParser.T__1);
			this.state = 77;
			this.posicao();
			this.state = 78;
			this.match(ListaComandosParser.T__2);
			this.state = 79;
			this.match(ListaComandosParser.T__3);
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
		this.enterRule(_localctx, 18, ListaComandosParser.RULE_valor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ListaComandosParser.IDENTIFIER) | (1 << ListaComandosParser.NUMBER) | (1 << ListaComandosParser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		this.enterRule(_localctx, 20, ListaComandosParser.RULE_posicao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(ListaComandosParser.NUMBER);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11X\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03(\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x03\x02\x0E" +
		"\x10\x02S\x02\x1B\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x06)\x03\x02\x02" +
		"\x02\b/\x03\x02\x02\x02\n5\x03\x02\x02\x02\f=\x03\x02\x02\x02\x0EB\x03" +
		"\x02\x02\x02\x10G\x03\x02\x02\x02\x12M\x03\x02\x02\x02\x14S\x03\x02\x02" +
		"\x02\x16U\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02" +
		"\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
		"\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x07\x02\x02" +
		"\x03\x1F\x03\x03\x02\x02\x02 (\x05\x06\x04\x02!(\x05\b\x05\x02\"(\x05" +
		"\n\x06\x02#(\x05\f\x07\x02$(\x05\x0E\b\x02%(\x05\x10\t\x02&(\x05\x12\n" +
		"\x02\' \x03\x02\x02\x02\'!\x03\x02\x02\x02\'\"\x03\x02\x02\x02\'#\x03" +
		"\x02\x02\x02\'$\x03\x02\x02\x02\'%\x03\x02\x02\x02\'&\x03\x02\x02\x02" +
		"(\x05\x03\x02\x02\x02)*\x07\x03\x02\x02*+\x07\x04\x02\x02+,\x05\x14\v" +
		"\x02,-\x07\x05\x02\x02-.\x07\x06\x02\x02.\x07\x03\x02\x02\x02/0\x07\x07" +
		"\x02\x0201\x07\x04\x02\x0212\x05\x14\v\x0223\x07\x05\x02\x0234\x07\x06" +
		"\x02\x024\t\x03\x02\x02\x0256\x07\b\x02\x0267\x07\x04\x02\x0278\x05\x14" +
		"\v\x0289\x07\t\x02\x029:\x05\x14\v\x02:;\x07\x05\x02\x02;<\x07\x06\x02" +
		"\x02<\v\x03\x02\x02\x02=>\x07\n\x02\x02>?\x07\x04\x02\x02?@\x07\x05\x02" +
		"\x02@A\x07\x06\x02\x02A\r\x03\x02\x02\x02BC\x07\v\x02\x02CD\x07\x04\x02" +
		"\x02DE\x07\x05\x02\x02EF\x07\x06\x02\x02F\x0F\x03\x02\x02\x02GH\x07\f" +
		"\x02\x02HI\x07\x04\x02\x02IJ\x05\x14\v\x02JK\x07\x05\x02\x02KL\x07\x06" +
		"\x02\x02L\x11\x03\x02\x02\x02MN\x07\r\x02\x02NO\x07\x04\x02\x02OP\x05" +
		"\x16\f\x02PQ\x07\x05\x02\x02QR\x07\x06\x02\x02R\x13\x03\x02\x02\x02ST" +
		"\t\x02\x02\x02T\x15\x03\x02\x02\x02UV\x07\x0F\x02\x02V\x17\x03\x02\x02" +
		"\x02\x04\x1B\'";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ListaComandosParser.__ATN) {
			ListaComandosParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ListaComandosParser._serializedATN));
		}

		return ListaComandosParser.__ATN;
	}

}

export class CommandsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ListaComandosParser.EOF, 0); }
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
	public get ruleIndex(): number { return ListaComandosParser.RULE_commands; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterCommands) {
			listener.enterCommands(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitCommands) {
			listener.exitCommands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitCommands) {
			return visitor.visitCommands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public inserir_inicioCommand(): Inserir_inicioCommandContext | undefined {
		return this.tryGetRuleContext(0, Inserir_inicioCommandContext);
	}
	public inserir_fimCommand(): Inserir_fimCommandContext | undefined {
		return this.tryGetRuleContext(0, Inserir_fimCommandContext);
	}
	public inserir_aposCommand(): Inserir_aposCommandContext | undefined {
		return this.tryGetRuleContext(0, Inserir_aposCommandContext);
	}
	public remover_inicioCommand(): Remover_inicioCommandContext | undefined {
		return this.tryGetRuleContext(0, Remover_inicioCommandContext);
	}
	public remover_fimCommand(): Remover_fimCommandContext | undefined {
		return this.tryGetRuleContext(0, Remover_fimCommandContext);
	}
	public remover_elementoCommand(): Remover_elementoCommandContext | undefined {
		return this.tryGetRuleContext(0, Remover_elementoCommandContext);
	}
	public remover_posicaoCommand(): Remover_posicaoCommandContext | undefined {
		return this.tryGetRuleContext(0, Remover_posicaoCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_command; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inserir_inicioCommandContext extends ParserRuleContext {
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_inserir_inicioCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterInserir_inicioCommand) {
			listener.enterInserir_inicioCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitInserir_inicioCommand) {
			listener.exitInserir_inicioCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitInserir_inicioCommand) {
			return visitor.visitInserir_inicioCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inserir_fimCommandContext extends ParserRuleContext {
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_inserir_fimCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterInserir_fimCommand) {
			listener.enterInserir_fimCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitInserir_fimCommand) {
			listener.exitInserir_fimCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitInserir_fimCommand) {
			return visitor.visitInserir_fimCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inserir_aposCommandContext extends ParserRuleContext {
	public valor(): ValorContext[];
	public valor(i: number): ValorContext;
	public valor(i?: number): ValorContext | ValorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValorContext);
		} else {
			return this.getRuleContext(i, ValorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_inserir_aposCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterInserir_aposCommand) {
			listener.enterInserir_aposCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitInserir_aposCommand) {
			listener.exitInserir_aposCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitInserir_aposCommand) {
			return visitor.visitInserir_aposCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Remover_inicioCommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_remover_inicioCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterRemover_inicioCommand) {
			listener.enterRemover_inicioCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitRemover_inicioCommand) {
			listener.exitRemover_inicioCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitRemover_inicioCommand) {
			return visitor.visitRemover_inicioCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Remover_fimCommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_remover_fimCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterRemover_fimCommand) {
			listener.enterRemover_fimCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitRemover_fimCommand) {
			listener.exitRemover_fimCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitRemover_fimCommand) {
			return visitor.visitRemover_fimCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Remover_elementoCommandContext extends ParserRuleContext {
	public valor(): ValorContext {
		return this.getRuleContext(0, ValorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_remover_elementoCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterRemover_elementoCommand) {
			listener.enterRemover_elementoCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitRemover_elementoCommand) {
			listener.exitRemover_elementoCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitRemover_elementoCommand) {
			return visitor.visitRemover_elementoCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Remover_posicaoCommandContext extends ParserRuleContext {
	public posicao(): PosicaoContext {
		return this.getRuleContext(0, PosicaoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_remover_posicaoCommand; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterRemover_posicaoCommand) {
			listener.enterRemover_posicaoCommand(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitRemover_posicaoCommand) {
			listener.exitRemover_posicaoCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitRemover_posicaoCommand) {
			return visitor.visitRemover_posicaoCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ListaComandosParser.IDENTIFIER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ListaComandosParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ListaComandosParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_valor; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterValor) {
			listener.enterValor(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitValor) {
			listener.exitValor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitValor) {
			return visitor.visitValor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PosicaoContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ListaComandosParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ListaComandosParser.RULE_posicao; }
	// @Override
	public enterRule(listener: ListaComandosListener): void {
		if (listener.enterPosicao) {
			listener.enterPosicao(this);
		}
	}
	// @Override
	public exitRule(listener: ListaComandosListener): void {
		if (listener.exitPosicao) {
			listener.exitPosicao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ListaComandosVisitor<Result>): Result {
		if (visitor.visitPosicao) {
			return visitor.visitPosicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


