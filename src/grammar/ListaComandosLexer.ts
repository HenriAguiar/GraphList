// Generated from grammars/ListaComandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ListaComandosLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "LPAREN", "RPAREN", 
		"COMMA", "SEMICOLON", "IDENTIFIER", "NUMBER", "STRING", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ListaComandosLexer._LITERAL_NAMES, ListaComandosLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ListaComandosLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ListaComandosLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ListaComandos.g4"; }

	// @Override
	public get ruleNames(): string[] { return ListaComandosLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ListaComandosLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ListaComandosLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ListaComandosLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11\xB6\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x07\r\x90\n\r\f\r\x0E\r\x93\v\r\x03\x0E\x06\x0E\x96\n\x0E" +
		"\r\x0E\x0E\x0E\x97\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x9E\n\x0F\f" +
		"\x0F\x0E\x0F\xA1\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\xA8\n\x0F\f\x0F\x0E\x0F\xAB\v\x0F\x03\x0F\x05\x0F\xAE\n\x0F\x03\x10\x06" +
		"\x10\xB1\n\x10\r\x10\x0E\x10\xB2\x03\x10\x03\x10\x02\x02\x02\x11\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10" +
		"\x1F\x02\x11\x03\x02\b\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x022;\x04\x02" +
		"$$^^\x04\x02))^^\x05\x02\v\f\x0F\x0F\"\"\x02\xBD\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x03!\x03\x02\x02\x02\x05" +
		"0\x03\x02\x02\x02\x07<\x03\x02\x02\x02\tK\x03\x02\x02\x02\vW\x03\x02\x02" +
		"\x02\rh\x03\x02\x02\x02\x0Fu\x03\x02\x02\x02\x11\x85\x03\x02\x02\x02\x13" +
		"\x87\x03\x02\x02\x02\x15\x89\x03\x02\x02\x02\x17\x8B\x03\x02\x02\x02\x19" +
		"\x8D\x03\x02\x02\x02\x1B\x95\x03\x02\x02\x02\x1D\xAD\x03\x02\x02\x02\x1F" +
		"\xB0\x03\x02\x02\x02!\"\x07k\x02\x02\"#\x07p\x02\x02#$\x07u\x02\x02$%" +
		"\x07g\x02\x02%&\x07t\x02\x02&\'\x07k\x02\x02\'(\x07t\x02\x02()\x07a\x02" +
		"\x02)*\x07k\x02\x02*+\x07p\x02\x02+,\x07k\x02\x02,-\x07e\x02\x02-.\x07" +
		"k\x02\x02./\x07q\x02\x02/\x04\x03\x02\x02\x0201\x07k\x02\x0212\x07p\x02" +
		"\x0223\x07u\x02\x0234\x07g\x02\x0245\x07t\x02\x0256\x07k\x02\x0267\x07" +
		"t\x02\x0278\x07a\x02\x0289\x07h\x02\x029:\x07k\x02\x02:;\x07o\x02\x02" +
		";\x06\x03\x02\x02\x02<=\x07t\x02\x02=>\x07g\x02\x02>?\x07o\x02\x02?@\x07" +
		"q\x02\x02@A\x07x\x02\x02AB\x07g\x02\x02BC\x07t\x02\x02CD\x07a\x02\x02" +
		"DE\x07k\x02\x02EF\x07p\x02\x02FG\x07k\x02\x02GH\x07e\x02\x02HI\x07k\x02" +
		"\x02IJ\x07q\x02\x02J\b\x03\x02\x02\x02KL\x07t\x02\x02LM\x07g\x02\x02M" +
		"N\x07o\x02\x02NO\x07q\x02\x02OP\x07x\x02\x02PQ\x07g\x02\x02QR\x07t\x02" +
		"\x02RS\x07a\x02\x02ST\x07h\x02\x02TU\x07k\x02\x02UV\x07o\x02\x02V\n\x03" +
		"\x02\x02\x02WX\x07t\x02\x02XY\x07g\x02\x02YZ\x07o\x02\x02Z[\x07q\x02\x02" +
		"[\\\x07x\x02\x02\\]\x07g\x02\x02]^\x07t\x02\x02^_\x07a\x02\x02_`\x07g" +
		"\x02\x02`a\x07n\x02\x02ab\x07g\x02\x02bc\x07o\x02\x02cd\x07g\x02\x02d" +
		"e\x07p\x02\x02ef\x07v\x02\x02fg\x07q\x02\x02g\f\x03\x02\x02\x02hi\x07" +
		"k\x02\x02ij\x07p\x02\x02jk\x07u\x02\x02kl\x07g\x02\x02lm\x07t\x02\x02" +
		"mn\x07k\x02\x02no\x07t\x02\x02op\x07a\x02\x02pq\x07c\x02\x02qr\x07r\x02" +
		"\x02rs\x07q\x02\x02st\x07u\x02\x02t\x0E\x03\x02\x02\x02uv\x07t\x02\x02" +
		"vw\x07g\x02\x02wx\x07o\x02\x02xy\x07q\x02\x02yz\x07x\x02\x02z{\x07g\x02" +
		"\x02{|\x07t\x02\x02|}\x07a\x02\x02}~\x07r\x02\x02~\x7F\x07q\x02\x02\x7F" +
		"\x80\x07u\x02\x02\x80\x81\x07k\x02\x02\x81\x82\x07e\x02\x02\x82\x83\x07" +
		"c\x02\x02\x83\x84\x07q\x02\x02\x84\x10\x03\x02\x02\x02\x85\x86\x07*\x02" +
		"\x02\x86\x12\x03\x02\x02\x02\x87\x88\x07+\x02\x02\x88\x14\x03\x02\x02" +
		"\x02\x89\x8A\x07.\x02\x02\x8A\x16\x03\x02\x02\x02\x8B\x8C\x07=\x02\x02" +
		"\x8C\x18\x03\x02\x02\x02\x8D\x91\t\x02\x02\x02\x8E\x90\t\x03\x02\x02\x8F" +
		"\x8E\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91" +
		"\x92\x03\x02\x02\x02\x92\x1A\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94" +
		"\x96\t\x04\x02\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97" +
		"\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x1C\x03\x02\x02\x02\x99" +
		"\x9F\x07$\x02\x02\x9A\x9E\n\x05\x02\x02\x9B\x9C\x07^\x02\x02\x9C\x9E\v" +
		"\x02\x02\x02\x9D\x9A\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03" +
		"\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03" +
		"\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xAE\x07$\x02\x02\xA3\xA9\x07" +
		")\x02\x02\xA4\xA8\n\x06\x02\x02\xA5\xA6\x07^\x02\x02\xA6\xA8\v\x02\x02" +
		"\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAB\x03\x02\x02" +
		"\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02" +
		"\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAE\x07)\x02\x02\xAD\x99\x03\x02\x02" +
		"\x02\xAD\xA3\x03\x02\x02\x02\xAE\x1E\x03\x02\x02\x02\xAF\xB1\t\x07\x02" +
		"\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\b\x10\x02" +
		"\x02\xB5 \x03\x02\x02\x02\v\x02\x91\x97\x9D\x9F\xA7\xA9\xAD\xB2\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ListaComandosLexer.__ATN) {
			ListaComandosLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ListaComandosLexer._serializedATN));
		}

		return ListaComandosLexer.__ATN;
	}

}

