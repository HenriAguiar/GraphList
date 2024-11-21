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

export class ListaComandosParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly LPAREN = 8;
	public static readonly RPAREN = 9;
	public static readonly COMMA = 10;
	public static readonly SEMICOLON = 11;
	public static readonly IDENTIFIER = 12;
	public static readonly NUMBER = 13;
	public static readonly STRING = 14;
	public static readonly WS = 15;
	public static readonly RULE_commands = 0;
	public static readonly RULE_command = 1;
	public static readonly RULE_valor = 2;
	public static readonly RULE_posicao = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"commands", "command", "valor", "posicao",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'inserir_inicio'", "'inserir_fim'", "'remover_inicio'", "'remover_fim'", 
		"'remover_elemento'", "'inserir_apos'", "'remover_posicao'", "'('", "')'", 
		"','", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "LPAREN", "RPAREN", "COMMA", "SEMICOLON", "IDENTIFIER", "NUMBER", 
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
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 8;
				this.command();
				this.state = 9;
				this.match(ListaComandosParser.SEMICOLON);
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ListaComandosParser.T__0) | (1 << ListaComandosParser.T__1) | (1 << ListaComandosParser.T__2) | (1 << ListaComandosParser.T__3) | (1 << ListaComandosParser.T__4) | (1 << ListaComandosParser.T__5) | (1 << ListaComandosParser.T__6))) !== 0));
			this.state = 15;
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
		let _la: number;
		try {
			this.state = 52;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ListaComandosParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 17;
				this.match(ListaComandosParser.T__0);
				this.state = 18;
				this.match(ListaComandosParser.LPAREN);
				this.state = 19;
				this.valor();
				this.state = 20;
				this.match(ListaComandosParser.RPAREN);
				}
				break;
			case ListaComandosParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 22;
				this.match(ListaComandosParser.T__1);
				this.state = 23;
				this.match(ListaComandosParser.LPAREN);
				this.state = 24;
				this.valor();
				this.state = 25;
				this.match(ListaComandosParser.RPAREN);
				}
				break;
			case ListaComandosParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 27;
				this.match(ListaComandosParser.T__2);
				this.state = 28;
				this.match(ListaComandosParser.LPAREN);
				this.state = 29;
				this.match(ListaComandosParser.RPAREN);
				}
				break;
			case ListaComandosParser.T__3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 30;
				this.match(ListaComandosParser.T__3);
				this.state = 31;
				this.match(ListaComandosParser.LPAREN);
				this.state = 32;
				this.match(ListaComandosParser.RPAREN);
				}
				break;
			case ListaComandosParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 33;
				this.match(ListaComandosParser.T__4);
				this.state = 34;
				this.match(ListaComandosParser.LPAREN);
				this.state = 35;
				this.valor();
				this.state = 36;
				this.match(ListaComandosParser.RPAREN);
				}
				break;
			case ListaComandosParser.T__5:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 38;
				this.match(ListaComandosParser.T__5);
				this.state = 39;
				this.match(ListaComandosParser.LPAREN);
				this.state = 40;
				this.valor();
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ListaComandosParser.COMMA) {
					{
					this.state = 41;
					this.match(ListaComandosParser.COMMA);
					this.state = 42;
					this.valor();
					}
				}

				this.state = 45;
				this.match(ListaComandosParser.RPAREN);
				}
				break;
			case ListaComandosParser.T__6:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 47;
				this.match(ListaComandosParser.T__6);
				this.state = 48;
				this.match(ListaComandosParser.LPAREN);
				this.state = 49;
				this.posicao();
				this.state = 50;
				this.match(ListaComandosParser.RPAREN);
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
	public valor(): ValorContext {
		let _localctx: ValorContext = new ValorContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ListaComandosParser.RULE_valor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
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
		this.enterRule(_localctx, 6, ListaComandosParser.RULE_posicao);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11=\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x06\x02\x0E\n\x02\r\x02\x0E\x02\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03.\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x037\n\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b" +
		"\x02\x02\x03\x03\x02\x0E\x10\x02@\x02\r\x03\x02\x02\x02\x046\x03\x02\x02" +
		"\x02\x068\x03\x02\x02\x02\b:\x03\x02\x02\x02\n\v\x05\x04\x03\x02\v\f\x07" +
		"\r\x02\x02\f\x0E\x03\x02\x02\x02\r\n\x03\x02\x02\x02\x0E\x0F\x03\x02\x02" +
		"\x02\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11\x03\x02\x02" +
		"\x02\x11\x12\x07\x02\x02\x03\x12\x03\x03\x02\x02\x02\x13\x14\x07\x03\x02" +
		"\x02\x14\x15\x07\n\x02\x02\x15\x16\x05\x06\x04\x02\x16\x17\x07\v\x02\x02" +
		"\x177\x03\x02\x02\x02\x18\x19\x07\x04\x02\x02\x19\x1A\x07\n\x02\x02\x1A" +
		"\x1B\x05\x06\x04\x02\x1B\x1C\x07\v\x02\x02\x1C7\x03\x02\x02\x02\x1D\x1E" +
		"\x07\x05\x02\x02\x1E\x1F\x07\n\x02\x02\x1F7\x07\v\x02\x02 !\x07\x06\x02" +
		"\x02!\"\x07\n\x02\x02\"7\x07\v\x02\x02#$\x07\x07\x02\x02$%\x07\n\x02\x02" +
		"%&\x05\x06\x04\x02&\'\x07\v\x02\x02\'7\x03\x02\x02\x02()\x07\b\x02\x02" +
		")*\x07\n\x02\x02*-\x05\x06\x04\x02+,\x07\f\x02\x02,.\x05\x06\x04\x02-" +
		"+\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02/0\x07\v\x02\x02" +
		"07\x03\x02\x02\x0212\x07\t\x02\x0223\x07\n\x02\x0234\x05\b\x05\x0245\x07" +
		"\v\x02\x0257\x03\x02\x02\x026\x13\x03\x02\x02\x026\x18\x03\x02\x02\x02" +
		"6\x1D\x03\x02\x02\x026 \x03\x02\x02\x026#\x03\x02\x02\x026(\x03\x02\x02" +
		"\x0261\x03\x02\x02\x027\x05\x03\x02\x02\x0289\t\x02\x02\x029\x07\x03\x02" +
		"\x02\x02:;\x07\x0F\x02\x02;\t\x03\x02\x02\x02\x05\x0F-6";
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
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ListaComandosParser.SEMICOLON);
		} else {
			return this.getToken(ListaComandosParser.SEMICOLON, i);
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
}


export class CommandContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ListaComandosParser.LPAREN, 0); }
	public valor(): ValorContext[];
	public valor(i: number): ValorContext;
	public valor(i?: number): ValorContext | ValorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValorContext);
		} else {
			return this.getRuleContext(i, ValorContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ListaComandosParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ListaComandosParser.COMMA, 0); }
	public posicao(): PosicaoContext | undefined {
		return this.tryGetRuleContext(0, PosicaoContext);
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
}


