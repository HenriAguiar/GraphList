// ListaComandos.g4
grammar ListaComandos;

// A regra de início
commands: command* EOF;

// Definição de um comando
command
    : inserir_inicioCommand
    | inserir_fimCommand
    | inserir_aposCommand
    | remover_inicioCommand
    | remover_fimCommand
    | remover_elementoCommand
    | remover_posicaoCommand
    ;

// Comandos de Inserção
inserir_inicioCommand
    : 'inserir_inicio' '(' valor ')' ';'
    ;

inserir_fimCommand
    : 'inserir_fim' '(' valor ')' ';'
    ;

inserir_aposCommand
    : 'inserir_apos' '(' valor ',' valor ')' ';'
    ;

// Comandos de Remoção
remover_inicioCommand
    : 'remover_inicio' '(' ')' ';'
    ;

remover_fimCommand
    : 'remover_fim' '(' ')' ';'
    ;

remover_elementoCommand
    : 'remover_elemento' '(' valor ')' ';'
    ;

remover_posicaoCommand
    : 'remover_posicao' '(' posicao ')' ';'
    ;

// Definição de valor (pode ser um identificador, número ou string)
valor
    : IDENTIFIER
    | NUMBER
    | STRING
    ;

// Definição de posição (número inteiro)
posicao
    : NUMBER
    ;

// Definição de tokens

IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

NUMBER
    : [0-9]+
    ;

STRING
    : '"' (~["\r\n])* '"'
    ;

// Ignorar espaços em branco, tabulações e quebras de linha
WS
    : [ \t\r\n]+ -> skip
    ;
