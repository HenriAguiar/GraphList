grammar ListaComandos;

commands: command* EOF;

command
    : inserir_inicioCommand
    | inserir_fimCommand
    | inserir_aposCommand
    | remover_inicioCommand
    | remover_fimCommand
    | remover_elementoCommand
    | remover_posicaoCommand
    ;

inserir_inicioCommand: INSERIR_INICIO LPAREN valor RPAREN SEMICOLON;
inserir_fimCommand: INSERIR_FIM LPAREN valor RPAREN SEMICOLON;
inserir_aposCommand: INSERIR_APOS LPAREN valor COMMA valor RPAREN SEMICOLON;
remover_inicioCommand: REMOVER_INICIO LPAREN RPAREN SEMICOLON;
remover_fimCommand: REMOVER_FIM LPAREN RPAREN SEMICOLON;
remover_elementoCommand: REMOVER_ELEMENTO LPAREN valor RPAREN SEMICOLON;
remover_posicaoCommand: REMOVER_POSICAO LPAREN posicao RPAREN SEMICOLON;

valor: IDENTIFIER | NUMBER | STRING;
posicao: NUMBER;

// Tokens para os literais
INSERIR_INICIO: 'inserir_inicio';
INSERIR_FIM: 'inserir_fim';
INSERIR_APOS: 'inserir_apos';
REMOVER_INICIO: 'remover_inicio';
REMOVER_FIM: 'remover_fim';
REMOVER_ELEMENTO: 'remover_elemento';
REMOVER_POSICAO: 'remover_posicao';

// Tokens para símbolos e palavras reservadas
LPAREN: '(';
RPAREN: ')';
COMMA: ',';
SEMICOLON: ';';

// Tokens para valores
IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
STRING: '"' .*? '"';

// Ignorar espaços em branco
WS: [ \t\r\n]+ -> skip;
