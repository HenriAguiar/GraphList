grammar ListaComandos;

commands
    : (command SEMICOLON)+ EOF
    ;

command
    : 'inserir_inicio' LPAREN valor RPAREN
    | 'inserir_fim' LPAREN valor RPAREN
    | 'remover_inicio' LPAREN RPAREN
    | 'remover_fim' LPAREN RPAREN
    | 'remover_elemento' LPAREN valor RPAREN
    | 'inserir_apos' LPAREN valor (COMMA valor)? RPAREN
    | 'remover_posicao' LPAREN posicao RPAREN
    ;

valor
    : IDENTIFIER
    | NUMBER
    | STRING
    ;

posicao
    : NUMBER
    ;

LPAREN      : '(';
RPAREN      : ')';
COMMA       : ',';
SEMICOLON   : ';';

IDENTIFIER
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

NUMBER
    : [0-9]+
    ;

STRING
    : '"' ( ~["\\] | '\\' . )* '"'
    | '\'' ( ~['\\] | '\\' . )* '\''
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
