grammar GramCadenas;

options { tokenVocab = myGramarLexer; }

// Gramática
programa: ( declaracion | funcion | ejecucion)* EOF                     #program
    ;

ejecucion: (concatenar | impresion | operacion_texto)+                  #ejecution 
;

declaracion: VAR NOMBRE EQ valor SEMICOLON                              #declaracionValor
           | VAR NOMBRE SEMICOLON                                       #declaracionSinValor
           ; 

funcion: FUN NOMBRE (LPAREN argumentos RPAREN)? LBRACE instruccion RBRACE    #funciones       
       ;

argumentos: variable (COMA argumentos)*                                  #argumentacion
          ;

instruccion: (operacion_texto | impresion | retorno)+                   #instrucciones
;     

operacion_texto: variable EQ transformacion LPAREN cadena RPAREN SEMICOLON #operacionTexto
;

transformacion: (MAYUS | MINUS | LONG | INVERT | REMPL)                 #transformacionTexto
;

concatenar: variable EQ cadena ADD cadena SEMICOLON                     #concatenarTexto
;

impresion: IMP LPAREN valor RPAREN SEMICOLON                            #impresionTexto
;

retorno: DEV valor SEMICOLON                                            #retornoTexto
;

valor: ( NUM | cadena )                                                 #valorTexto
;

cadena: (texto | variable)                                              #cadenaTexto
;

texto: DOBCOM_APERTURA caracteres* DOBCOM_CIERRE                                         #textoText
;

caracteres: NUM                             #carNum
        | SIMB                              #carSimb
        | LETRA                             #carLetra
        | ESPACIO                           #carEspacio
;

variable: NOMBRE                           #nomVariables                                
;