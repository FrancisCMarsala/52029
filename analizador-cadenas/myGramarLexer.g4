lexer grammar myGramarLexer;

tokens {DOBCOM_APERTURA, DOBCOM_CIERRE, ESPACIO}

// Lexemas  
FUN: 'función' | 'funcion';
DEV: 'devolver';
VAR: 'variable';
EQ: '=';
MAYUS: 'mayuscula' | 'mayúscula';
MINUS: 'minuscula' | 'minúscula';
LONG: 'longitud';
INVERT: 'invertir';
REMPL: 'reemplazar';
ADD: '+';
IMP: 'imprimir';
SEMICOLON: ';';
COMA: ',';
NOMBRE: [a-zA-Z_][a-zA-Z0-9]*;
LETRA: [a-zA-Z_];
NUM: [0-9]+;
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SIMB: '!' | '@' | '#' | '$' | '%' | '^' | '&' | '*' | '(' | ')' | '-' | '_' | '+' | '=' | '{' | '}' | '[' | ']' | ':' | ';' | '\'' | '<' | '>' | ',' | '.';

DOBCOM_APERTURA_LEX: '"' -> type(DOBCOM_APERTURA), pushMode(INSIDE_STRING) ;

WS : [ \t\r\n]+ -> skip ; // Ignora espacios y tabulaciones fuera de las cadenas

mode INSIDE_STRING;

    COMILLA_CIERRE_LEX: '"'         -> type(DOBCOM_CIERRE), popMode ;
    LETRA_EN_CADENA:    [a-zA-Z]    -> type(LETRA) ;         // Reusa el tipo LETRA
    DIG_EN_CADENA:      [0-9]       -> type(NUM) ;           // Reusa el tipo DIG
    SIMB_EN_CADENA:     [.,!?:;]    -> type(SIMB) ;          // Reusa el tipo SIMB
    ESPACIO_EN_CADENA_LEX: ' ' -> type(ESPACIO);