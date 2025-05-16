// Generated from c:/Users/marsa/analizador-cadenas/GramCadenas.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GramCadenasListener from './GramCadenasListener.js';
import GramCadenasVisitor from './GramCadenasVisitor.js';

const serializedATN = [4,1,27,140,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,5,0,36,8,0,10,0,12,0,39,9,0,1,
0,1,0,1,1,1,1,1,1,4,1,46,8,1,11,1,12,1,47,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,3,2,59,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,67,8,3,1,3,1,3,1,3,1,3,1,4,
1,4,1,4,5,4,76,8,4,10,4,12,4,79,9,4,1,5,1,5,1,5,4,5,84,8,5,11,5,12,5,85,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,3,11,117,8,11,1,12,1,12,
3,12,121,8,12,1,13,1,13,5,13,125,8,13,10,13,12,13,128,9,13,1,13,1,13,1,14,
1,14,1,14,1,14,3,14,136,8,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,0,1,1,0,8,12,141,0,37,1,0,0,0,2,45,1,0,0,0,4,58,1,0,
0,0,6,60,1,0,0,0,8,72,1,0,0,0,10,83,1,0,0,0,12,87,1,0,0,0,14,95,1,0,0,0,
16,97,1,0,0,0,18,104,1,0,0,0,20,110,1,0,0,0,22,116,1,0,0,0,24,120,1,0,0,
0,26,122,1,0,0,0,28,135,1,0,0,0,30,137,1,0,0,0,32,36,3,4,2,0,33,36,3,6,3,
0,34,36,3,2,1,0,35,32,1,0,0,0,35,33,1,0,0,0,35,34,1,0,0,0,36,39,1,0,0,0,
37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,41,5,0,0,1,41,
1,1,0,0,0,42,46,3,16,8,0,43,46,3,18,9,0,44,46,3,12,6,0,45,42,1,0,0,0,45,
43,1,0,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,3,
1,0,0,0,49,50,5,6,0,0,50,51,5,17,0,0,51,52,5,7,0,0,52,53,3,22,11,0,53,54,
5,15,0,0,54,59,1,0,0,0,55,56,5,6,0,0,56,57,5,17,0,0,57,59,5,15,0,0,58,49,
1,0,0,0,58,55,1,0,0,0,59,5,1,0,0,0,60,61,5,4,0,0,61,66,5,17,0,0,62,63,5,
20,0,0,63,64,3,8,4,0,64,65,5,21,0,0,65,67,1,0,0,0,66,62,1,0,0,0,66,67,1,
0,0,0,67,68,1,0,0,0,68,69,5,22,0,0,69,70,3,10,5,0,70,71,5,23,0,0,71,7,1,
0,0,0,72,77,3,30,15,0,73,74,5,16,0,0,74,76,3,8,4,0,75,73,1,0,0,0,76,79,1,
0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,9,1,0,0,0,79,77,1,0,0,0,80,84,3,12,
6,0,81,84,3,18,9,0,82,84,3,20,10,0,83,80,1,0,0,0,83,81,1,0,0,0,83,82,1,0,
0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,11,1,0,0,0,87,88,3,30,15,
0,88,89,5,7,0,0,89,90,3,14,7,0,90,91,5,20,0,0,91,92,3,24,12,0,92,93,5,21,
0,0,93,94,5,15,0,0,94,13,1,0,0,0,95,96,7,0,0,0,96,15,1,0,0,0,97,98,3,30,
15,0,98,99,5,7,0,0,99,100,3,24,12,0,100,101,5,13,0,0,101,102,3,24,12,0,102,
103,5,15,0,0,103,17,1,0,0,0,104,105,5,14,0,0,105,106,5,20,0,0,106,107,3,
22,11,0,107,108,5,21,0,0,108,109,5,15,0,0,109,19,1,0,0,0,110,111,5,5,0,0,
111,112,3,22,11,0,112,113,5,15,0,0,113,21,1,0,0,0,114,117,5,19,0,0,115,117,
3,24,12,0,116,114,1,0,0,0,116,115,1,0,0,0,117,23,1,0,0,0,118,121,3,26,13,
0,119,121,3,30,15,0,120,118,1,0,0,0,120,119,1,0,0,0,121,25,1,0,0,0,122,126,
5,1,0,0,123,125,3,28,14,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,
0,126,127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,5,2,0,0,130,27,
1,0,0,0,131,136,5,19,0,0,132,136,5,24,0,0,133,136,5,18,0,0,134,136,5,3,0,
0,135,131,1,0,0,0,135,132,1,0,0,0,135,133,1,0,0,0,135,134,1,0,0,0,136,29,
1,0,0,0,137,138,5,17,0,0,138,31,1,0,0,0,13,35,37,45,47,58,66,77,83,85,116,
120,126,135];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GramCadenasParser extends antlr4.Parser {

    static grammarFileName = "GramCadenas.g4";
    static literalNames = [ null, null, null, null, null, "'devolver'", 
                            "'variable'", "'='", null, null, "'longitud'", 
                            "'invertir'", "'reemplazar'", "'+'", "'imprimir'", 
                            "';'", "','", null, null, null, "'('", "')'", 
                            "'{'", "'}'", null, null, "'\"'", "' '" ];
    static symbolicNames = [ null, "DOBCOM_APERTURA", "DOBCOM_CIERRE", "ESPACIO", 
                             "FUN", "DEV", "VAR", "EQ", "MAYUS", "MINUS", 
                             "LONG", "INVERT", "REMPL", "ADD", "IMP", "SEMICOLON", 
                             "COMA", "NOMBRE", "LETRA", "NUM", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SIMB", "WS", 
                             "COMILLA_CIERRE_LEX", "ESPACIO_EN_CADENA_LEX" ];
    static ruleNames = [ "programa", "ejecucion", "declaracion", "funcion", 
                         "argumentos", "instruccion", "operacion_texto", 
                         "transformacion", "concatenar", "impresion", "retorno", 
                         "valor", "cadena", "texto", "caracteres", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GramCadenasParser.ruleNames;
        this.literalNames = GramCadenasParser.literalNames;
        this.symbolicNames = GramCadenasParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GramCadenasParser.RULE_programa);
	    var _la = 0;
	    try {
	        localctx = new ProgramContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 147536) !== 0)) {
	            this.state = 35;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 6:
	                this.state = 32;
	                this.declaracion();
	                break;
	            case 4:
	                this.state = 33;
	                this.funcion();
	                break;
	            case 14:
	            case 17:
	                this.state = 34;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(GramCadenasParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GramCadenasParser.RULE_ejecucion);
	    try {
	        localctx = new EjecutionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 45;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 42;
	        		    this.concatenar();
	        		    break;

	        		case 2:
	        		    this.state = 43;
	        		    this.impresion();
	        		    break;

	        		case 3:
	        		    this.state = 44;
	        		    this.operacion_texto();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 47; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GramCadenasParser.RULE_declaracion);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.match(GramCadenasParser.VAR);
	            this.state = 50;
	            this.match(GramCadenasParser.NOMBRE);
	            this.state = 51;
	            this.match(GramCadenasParser.EQ);
	            this.state = 52;
	            this.valor();
	            this.state = 53;
	            this.match(GramCadenasParser.SEMICOLON);
	            break;

	        case 2:
	            localctx = new DeclaracionSinValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(GramCadenasParser.VAR);
	            this.state = 56;
	            this.match(GramCadenasParser.NOMBRE);
	            this.state = 57;
	            this.match(GramCadenasParser.SEMICOLON);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GramCadenasParser.RULE_funcion);
	    var _la = 0;
	    try {
	        localctx = new FuncionesContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(GramCadenasParser.FUN);
	        this.state = 61;
	        this.match(GramCadenasParser.NOMBRE);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 62;
	            this.match(GramCadenasParser.LPAREN);
	            this.state = 63;
	            this.argumentos();
	            this.state = 64;
	            this.match(GramCadenasParser.RPAREN);
	        }

	        this.state = 68;
	        this.match(GramCadenasParser.LBRACE);
	        this.state = 69;
	        this.instruccion();
	        this.state = 70;
	        this.match(GramCadenasParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GramCadenasParser.RULE_argumentos);
	    try {
	        localctx = new ArgumentacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.variable();
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 73;
	                this.match(GramCadenasParser.COMA);
	                this.state = 74;
	                this.argumentos(); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GramCadenasParser.RULE_instruccion);
	    var _la = 0;
	    try {
	        localctx = new InstruccionesContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 83;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	                this.state = 80;
	                this.operacion_texto();
	                break;
	            case 14:
	                this.state = 81;
	                this.impresion();
	                break;
	            case 5:
	                this.state = 82;
	                this.retorno();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 147488) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GramCadenasParser.RULE_operacion_texto);
	    try {
	        localctx = new OperacionTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.variable();
	        this.state = 88;
	        this.match(GramCadenasParser.EQ);
	        this.state = 89;
	        this.transformacion();
	        this.state = 90;
	        this.match(GramCadenasParser.LPAREN);
	        this.state = 91;
	        this.cadena();
	        this.state = 92;
	        this.match(GramCadenasParser.RPAREN);
	        this.state = 93;
	        this.match(GramCadenasParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GramCadenasParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        localctx = new TransformacionTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7936) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GramCadenasParser.RULE_concatenar);
	    try {
	        localctx = new ConcatenarTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.variable();
	        this.state = 98;
	        this.match(GramCadenasParser.EQ);
	        this.state = 99;
	        this.cadena();
	        this.state = 100;
	        this.match(GramCadenasParser.ADD);
	        this.state = 101;
	        this.cadena();
	        this.state = 102;
	        this.match(GramCadenasParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GramCadenasParser.RULE_impresion);
	    try {
	        localctx = new ImpresionTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(GramCadenasParser.IMP);
	        this.state = 105;
	        this.match(GramCadenasParser.LPAREN);
	        this.state = 106;
	        this.valor();
	        this.state = 107;
	        this.match(GramCadenasParser.RPAREN);
	        this.state = 108;
	        this.match(GramCadenasParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GramCadenasParser.RULE_retorno);
	    try {
	        localctx = new RetornoTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(GramCadenasParser.DEV);
	        this.state = 111;
	        this.valor();
	        this.state = 112;
	        this.match(GramCadenasParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GramCadenasParser.RULE_valor);
	    try {
	        localctx = new ValorTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 114;
	            this.match(GramCadenasParser.NUM);
	            break;
	        case 1:
	        case 17:
	            this.state = 115;
	            this.cadena();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GramCadenasParser.RULE_cadena);
	    try {
	        localctx = new CadenaTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 118;
	            this.texto();
	            break;
	        case 17:
	            this.state = 119;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GramCadenasParser.RULE_texto);
	    var _la = 0;
	    try {
	        localctx = new TextoTextContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(GramCadenasParser.DOBCOM_APERTURA);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17563656) !== 0)) {
	            this.state = 123;
	            this.caracteres();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 129;
	        this.match(GramCadenasParser.DOBCOM_CIERRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracteres() {
	    let localctx = new CaracteresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GramCadenasParser.RULE_caracteres);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            localctx = new CarNumContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.match(GramCadenasParser.NUM);
	            break;
	        case 24:
	            localctx = new CarSimbContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.match(GramCadenasParser.SIMB);
	            break;
	        case 18:
	            localctx = new CarLetraContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            this.match(GramCadenasParser.LETRA);
	            break;
	        case 3:
	            localctx = new CarEspacioContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 134;
	            this.match(GramCadenasParser.ESPACIO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GramCadenasParser.RULE_variable);
	    try {
	        localctx = new NomVariablesContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(GramCadenasParser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GramCadenasParser.EOF = antlr4.Token.EOF;
GramCadenasParser.DOBCOM_APERTURA = 1;
GramCadenasParser.DOBCOM_CIERRE = 2;
GramCadenasParser.ESPACIO = 3;
GramCadenasParser.FUN = 4;
GramCadenasParser.DEV = 5;
GramCadenasParser.VAR = 6;
GramCadenasParser.EQ = 7;
GramCadenasParser.MAYUS = 8;
GramCadenasParser.MINUS = 9;
GramCadenasParser.LONG = 10;
GramCadenasParser.INVERT = 11;
GramCadenasParser.REMPL = 12;
GramCadenasParser.ADD = 13;
GramCadenasParser.IMP = 14;
GramCadenasParser.SEMICOLON = 15;
GramCadenasParser.COMA = 16;
GramCadenasParser.NOMBRE = 17;
GramCadenasParser.LETRA = 18;
GramCadenasParser.NUM = 19;
GramCadenasParser.LPAREN = 20;
GramCadenasParser.RPAREN = 21;
GramCadenasParser.LBRACE = 22;
GramCadenasParser.RBRACE = 23;
GramCadenasParser.SIMB = 24;
GramCadenasParser.WS = 25;
GramCadenasParser.COMILLA_CIERRE_LEX = 26;
GramCadenasParser.ESPACIO_EN_CADENA_LEX = 27;

GramCadenasParser.RULE_programa = 0;
GramCadenasParser.RULE_ejecucion = 1;
GramCadenasParser.RULE_declaracion = 2;
GramCadenasParser.RULE_funcion = 3;
GramCadenasParser.RULE_argumentos = 4;
GramCadenasParser.RULE_instruccion = 5;
GramCadenasParser.RULE_operacion_texto = 6;
GramCadenasParser.RULE_transformacion = 7;
GramCadenasParser.RULE_concatenar = 8;
GramCadenasParser.RULE_impresion = 9;
GramCadenasParser.RULE_retorno = 10;
GramCadenasParser.RULE_valor = 11;
GramCadenasParser.RULE_cadena = 12;
GramCadenasParser.RULE_texto = 13;
GramCadenasParser.RULE_caracteres = 14;
GramCadenasParser.RULE_variable = 15;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_programa;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ProgramContext extends ProgramaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EOF() {
	    return this.getToken(GramCadenasParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.ProgramContext = ProgramContext;

class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_ejecucion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EjecutionContext extends EjecucionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	concatenar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenarContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenarContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterEjecution(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitEjecution(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitEjecution(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.EjecutionContext = EjecutionContext;

class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_declaracion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclaracionSinValorContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR() {
	    return this.getToken(GramCadenasParser.VAR, 0);
	};

	NOMBRE() {
	    return this.getToken(GramCadenasParser.NOMBRE, 0);
	};

	SEMICOLON() {
	    return this.getToken(GramCadenasParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterDeclaracionSinValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitDeclaracionSinValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitDeclaracionSinValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.DeclaracionSinValorContext = DeclaracionSinValorContext;

class DeclaracionValorContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR() {
	    return this.getToken(GramCadenasParser.VAR, 0);
	};

	NOMBRE() {
	    return this.getToken(GramCadenasParser.NOMBRE, 0);
	};

	EQ() {
	    return this.getToken(GramCadenasParser.EQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMICOLON() {
	    return this.getToken(GramCadenasParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterDeclaracionValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitDeclaracionValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitDeclaracionValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.DeclaracionValorContext = DeclaracionValorContext;

class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_funcion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FuncionesContext extends FuncionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUN() {
	    return this.getToken(GramCadenasParser.FUN, 0);
	};

	NOMBRE() {
	    return this.getToken(GramCadenasParser.NOMBRE, 0);
	};

	LBRACE() {
	    return this.getToken(GramCadenasParser.LBRACE, 0);
	};

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	RBRACE() {
	    return this.getToken(GramCadenasParser.RBRACE, 0);
	};

	LPAREN() {
	    return this.getToken(GramCadenasParser.LPAREN, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	RPAREN() {
	    return this.getToken(GramCadenasParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterFunciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitFunciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitFunciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.FuncionesContext = FuncionesContext;

class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_argumentos;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArgumentacionContext extends ArgumentosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramCadenasParser.COMA);
	    } else {
	        return this.getToken(GramCadenasParser.COMA, i);
	    }
	};


	argumentos = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentosContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentosContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterArgumentacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitArgumentacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitArgumentacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.ArgumentacionContext = ArgumentacionContext;

class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_instruccion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InstruccionesContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.InstruccionesContext = InstruccionesContext;

class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_operacion_texto;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OperacionTextoContext extends Operacion_textoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	EQ() {
	    return this.getToken(GramCadenasParser.EQ, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(GramCadenasParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(GramCadenasParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(GramCadenasParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterOperacionTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitOperacionTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitOperacionTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.OperacionTextoContext = OperacionTextoContext;

class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_transformacion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TransformacionTextoContext extends TransformacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MAYUS() {
	    return this.getToken(GramCadenasParser.MAYUS, 0);
	};

	MINUS() {
	    return this.getToken(GramCadenasParser.MINUS, 0);
	};

	LONG() {
	    return this.getToken(GramCadenasParser.LONG, 0);
	};

	INVERT() {
	    return this.getToken(GramCadenasParser.INVERT, 0);
	};

	REMPL() {
	    return this.getToken(GramCadenasParser.REMPL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterTransformacionTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitTransformacionTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitTransformacionTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.TransformacionTextoContext = TransformacionTextoContext;

class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_concatenar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConcatenarTextoContext extends ConcatenarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	EQ() {
	    return this.getToken(GramCadenasParser.EQ, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	ADD() {
	    return this.getToken(GramCadenasParser.ADD, 0);
	};

	SEMICOLON() {
	    return this.getToken(GramCadenasParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterConcatenarTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitConcatenarTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitConcatenarTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.ConcatenarTextoContext = ConcatenarTextoContext;

class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_impresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImpresionTextoContext extends ImpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IMP() {
	    return this.getToken(GramCadenasParser.IMP, 0);
	};

	LPAREN() {
	    return this.getToken(GramCadenasParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(GramCadenasParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(GramCadenasParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterImpresionTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitImpresionTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitImpresionTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.ImpresionTextoContext = ImpresionTextoContext;

class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_retorno;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RetornoTextoContext extends RetornoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEV() {
	    return this.getToken(GramCadenasParser.DEV, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMICOLON() {
	    return this.getToken(GramCadenasParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterRetornoTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitRetornoTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitRetornoTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.RetornoTextoContext = RetornoTextoContext;

class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValorTextoContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(GramCadenasParser.NUM, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterValorTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitValorTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitValorTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.ValorTextoContext = ValorTextoContext;

class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_cadena;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CadenaTextoContext extends CadenaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterCadenaTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitCadenaTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitCadenaTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.CadenaTextoContext = CadenaTextoContext;

class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_texto;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TextoTextContext extends TextoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DOBCOM_APERTURA() {
	    return this.getToken(GramCadenasParser.DOBCOM_APERTURA, 0);
	};

	DOBCOM_CIERRE() {
	    return this.getToken(GramCadenasParser.DOBCOM_CIERRE, 0);
	};

	caracteres = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracteresContext);
	    } else {
	        return this.getTypedRuleContext(CaracteresContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterTextoText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitTextoText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitTextoText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.TextoTextContext = TextoTextContext;

class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_caracteres;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CarLetraContext extends CaracteresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LETRA() {
	    return this.getToken(GramCadenasParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterCarLetra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitCarLetra(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitCarLetra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.CarLetraContext = CarLetraContext;

class CarSimbContext extends CaracteresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SIMB() {
	    return this.getToken(GramCadenasParser.SIMB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterCarSimb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitCarSimb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitCarSimb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.CarSimbContext = CarSimbContext;

class CarNumContext extends CaracteresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(GramCadenasParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterCarNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitCarNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitCarNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.CarNumContext = CarNumContext;

class CarEspacioContext extends CaracteresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ESPACIO() {
	    return this.getToken(GramCadenasParser.ESPACIO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterCarEspacio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitCarEspacio(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitCarEspacio(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.CarEspacioContext = CarEspacioContext;

class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramCadenasParser.RULE_variable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NomVariablesContext extends VariableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOMBRE() {
	    return this.getToken(GramCadenasParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.enterNomVariables(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramCadenasListener ) {
	        listener.exitNomVariables(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramCadenasVisitor ) {
	        return visitor.visitNomVariables(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GramCadenasParser.NomVariablesContext = NomVariablesContext;


GramCadenasParser.ProgramaContext = ProgramaContext; 
GramCadenasParser.EjecucionContext = EjecucionContext; 
GramCadenasParser.DeclaracionContext = DeclaracionContext; 
GramCadenasParser.FuncionContext = FuncionContext; 
GramCadenasParser.ArgumentosContext = ArgumentosContext; 
GramCadenasParser.InstruccionContext = InstruccionContext; 
GramCadenasParser.Operacion_textoContext = Operacion_textoContext; 
GramCadenasParser.TransformacionContext = TransformacionContext; 
GramCadenasParser.ConcatenarContext = ConcatenarContext; 
GramCadenasParser.ImpresionContext = ImpresionContext; 
GramCadenasParser.RetornoContext = RetornoContext; 
GramCadenasParser.ValorContext = ValorContext; 
GramCadenasParser.CadenaContext = CadenaContext; 
GramCadenasParser.TextoContext = TextoContext; 
GramCadenasParser.CaracteresContext = CaracteresContext; 
GramCadenasParser.VariableContext = VariableContext; 
