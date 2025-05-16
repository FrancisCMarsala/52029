import { Parser } from "antlr4";
import CalculatorVisitor from "./generated/CalculatorVisitor.js";
import CalculatorParser from "./generated/CalculatorParser.js";

let declaredVars = new Set(); // Conjunto para rastrear las variables declaradas
let variableValues = new Map(); // Mapa para almacenar los valores de las variables
let declaredFuns = new Set(); // Conjunto para rastrear las variables declaradas
let funValues = new Map(); // Mapa para almacenar los valores de las variables

let varInFun = new Set();

let lastFuncion;

export class CustomCalculatorVisitor extends CalculatorVisitor{

    constructor() {
        super();
        this.memory = new Map(); // Memoria temporal para reducciones
    }

    visitDeclaracionValor(ctx) {

        const nomVar = ctx.NOMBRE().getText(); // Obtener el nombre de la variable
        let valor;

        if (!declaredVars.has(nomVar) && !declaredFuns.has(nomVar)){
            if (ctx.valor()?.cadena()?.texto()) {
                valor = ctx.valor().cadena().texto().getText();
                if (!valor.startsWith('"') || !valor.endsWith('"')) {
                    console.error(`Error: La cadena ${valor} no está correctamente delimitada por comillas dobles.`);
                    return;
                }
                valor = valor.slice(1, -1); // Eliminar las comillas dobles
            } else if (ctx.valor()?.cadena()?.variable()){
                valor = variableValues.get(ctx.valor().cadena().variable().NOMBRE().getText()) // Obtener el valor asignado

            } else if(ctx.valor().NUM()){
                valor = ctx.valor().NUM().getText();
            } else {
                console.error(`Error: Entrada ${nomVar} no válida`);
                return;
            }

        } else {
            console.error(`Error: La variable ${nomVar} ya esta declarada`);
            return;
        }

        declaredVars.add(nomVar); // Agregar la variable al conjunto de declaradas
        variableValues.set(nomVar, valor); // Almacenar el valor de la variable
        //console.log(`Variable ${nomVar} fue declarada con valor: ${valor}`);
        return this.visitChildren(ctx);
    }

    visitDeclaracionSinValor(ctx) {
        const nomVar = ctx.NOMBRE().getText(); // Obtener el texto del lexema NOMBRE

        if (!declaredVars.has(nomVar) && !declaredFuns.has(nomVar)) {
            declaredVars.add(nomVar); // Agregar la variable al conjunto de declaradas
            return this.visitChildren(ctx);
        } else {
            console.error(`Error: La variable ${nomVar} ya esta declarada`);
            return;
        }
    }
    
    visitFunciones(ctx) {
        varInFun.clear();

        if (ctx.argumentos()) {
        this.visit(ctx.argumentos());
        }

        if (ctx.instruccion().retorno()) {

            let nombreFuncion = ctx.NOMBRE().getText();
            let instrucciones = ctx.instruccion();

            if (declaredVars.has(nombreFuncion)) {
                console.error(`Error: ${nombreFuncion} ya está declarada como variable.`);
                return;
            } if (declaredFuns.has(nombreFuncion)) {
                console.error(`Error: ${nombreFuncion} ya está declarada como función.`);
                return;
            }

            declaredFuns.add(nombreFuncion);
            lastFuncion = nombreFuncion;
            //console.log(`Función ${nombreFuncion} declarada.`);

            this.visit(instrucciones);

            if(ctx.argumentos() != null) this.visit(ctx.argumentos())
        }
    }

    visitArgumentacion(ctx) {
        const variable = ctx.variable().getText(); // Obtener el texto de la variable
        const declarada = declaredVars.has(variable); // Verificar si la variable está declarada

        if (declarada) {
            //console.log(`La variable ${variable} fue declarada`);
            varInFun.add(variable);
            //console.log(varInFun);
        } else {
            console.error(`Error: la variable ${variable} no fue declarada`);
            return;
        }

        if(ctx.argumentos() != null) this.visit(ctx.argumentos());
    }

    visitCadenaTexto(ctx) {
        let variable;

        // Verificar si el contexto tiene un nodo variable
        if (ctx.variable()) {
            variable = ctx.variable().NOMBRE().getText(); // Obtener el texto del lexema NOMBRE

            // Verificar si la variable está declarada
            const declarada = declaredVars.has(variable);

            if (declarada) {
                //console.log(`La variable ${variable} fue declarada`);
            } else {
                console.error(`Error: Entrada ${variable} no valida`);
                return;
            }
        } else if (ctx.texto()) {
            // Si es un texto, no es necesario verificar inicialización
            //console.log("Se encontró un texto literal en lugar de una variable.");
        } else {
            console.error("Error: No se encontró una variable o texto en el contexto.");
            return;
        }
    }

    visitOperacionTexto(ctx) {
        // Obtener la variable que se está asignando
        let variable = ctx.variable().NOMBRE().getText();
        const parentContext = ctx.parentCtx;

        if (parentContext instanceof CalculatorParser.InstruccionContext) {
            
            if(!varInFun.has(variable)){
                console.error(`Error: la variable ${variable} no fue declarada dentro de la función`);
                return;
            } else if (!declaredVars.has(variable)) {
                console.error(`Error: la variable ${variable} no fue declarada`);
                return;
            }

        }
            

            let cadena;

            // Verificar la cadena (puede ser un texto o una variable)
            if (ctx.cadena().variable()) {
                const cadenaVariable = ctx.cadena().variable().NOMBRE().getText();
                if (!declaredVars.has(cadenaVariable)) {
                    console.error(`Error: la variable ${cadenaVariable} en la operación no fue declarada`);
                    return;

                } else if (typeof(variableValues.get(ctx.cadena().variable().getText())) == "Number" ) {
                    console.error(`Error: la variable ${cadenaVariable} no es una cadena`);
                    return;
                } else {
                    cadena = variableValues.get(ctx.cadena().variable().getText());
                }
            } else if (ctx.cadena().texto()) {
                cadena = ctx.cadena().texto().getText();
            } else {
                console.error("Error: No se encontró una cadena válida en la operación.");
                return;
            }

            let resultado;

            // Aplicar la transformación
            if (ctx.transformacion().MAYUS()) {
                resultado = cadena.toUpperCase();
            } else if (ctx.transformacion().MINUS()) {
                resultado = cadena.toLowerCase();
            } else if (ctx.transformacion().LONG()) {
                resultado = cadena.length; // Obtener la longitud de la cadena
            } else if (ctx.transformacion().INVERT()) {
                resultado = cadena.split("").reverse().join("");
            } else if (ctx.transformacion().REMPL()) {
                resultado = cadena;
            } 
            else {
                console.error("Error: No se encontró una transformación válida.");
                return;
            }

            // Almacenar el resultado en la variable
            variableValues.set(variable, resultado);

    }

    visitConcatenarTexto(ctx) {
        // Obtener la variable que se está asignando
       const variable = ctx.variable().NOMBRE().getText();

        // Verificar si la variable está declarada
        if (!declaredVars.has(variable) && !declaredFuns.has(variable)) {
            console.error(`Error: la variable ${variable} no fue declarada`);
            return;
        }

        let cadena1, cadena2;

        // Verificar la primera cadena (puede ser un texto o una variable)
        if (ctx.cadena(0).variable()) {
            const cadenaVariable1 = ctx.cadena(0).variable().NOMBRE().getText();
            if(declaredVars.has(cadenaVariable1) && typeof(variableValues.get(cadenaVariable1)) != "Number"){
                cadena1 = variableValues.get(cadenaVariable1).toString(); // Obtener el valor de la variable
                //console.log(`La variable ${cadenaVariable1} contiene: ${cadena1}`);
            } else if(declaredFuns.has(cadenaVariable1)  && typeof(funValues.get(cadenaVariable1)) != "Number" ) {
                cadena1 = funValues.get(cadenaVariable1).toString();
            } else if (typeof(funValues.get(cadenaVariable1)) == "Number") {
                console.error(`Error: la variable ${cadenaVariable1} contiene un número`);
                return;
            } else {
                console.error(`Error: la variable ${cadenaVariable1} en la operación no fue declarada`);
                return;
            }

        } else if (ctx.cadena(0).texto()) {
            cadena1 = ctx.cadena(0).texto().getText().slice(1, -1); // Eliminar las comillas dobles
        } else {
            console.error("Error: No se encontró una cadena válida en la primera posición.");
            return;
        }

        // Verificar la segunda cadena (puede ser un texto o una variable)
        if (ctx.cadena(1).variable()) {
            const cadenaVariable2 = ctx.cadena(1).variable().NOMBRE().getText();
            if(declaredVars.has(cadenaVariable2)){
                cadena2 = variableValues.get(cadenaVariable2).toString(); // Obtener el valor de la variable
                //console.log(`La variable ${cadenaVariable2} contiene: ${cadena2}`);
            } else if(declaredFuns.has(cadenaVariable2)) {
                cadena2 = funValues.get(cadenaVariable2).toString();
            } else {
                console.error(`Error: la variable ${cadenaVariable2} en la operación no fue declarada`);
                return;
            }

        } else if (ctx.cadena(1).texto()) {
            cadena2 = restaurarEspacios(ctx.cadena(1).texto().getText().slice(1, -1)); // Obtener el texto literal
        } else {
            console.error("Error: No se encontró una cadena válida en la segunda posición.");
            return;
        }

        // Concatenar las cadenas
        const resultado = cadena1 + cadena2;
        //console.log(`Cadenas concatenadas: ${resultado}`);
        variableValues.set(variable, resultado); // Almacenar el resultado en la variable
    }
    
    visitImpresionTexto(ctx) {
        const valorContext = ctx.valor();
        let valorImprimir;

        if (valorContext.NUM()) {
            valorImprimir = valorContext.NUM().getText();
        } else if (valorContext.cadena()) {
            const cadenaContext = valorContext.cadena();
            if (cadenaContext.texto()) {
                valorImprimir = cadenaContext.texto().getText().slice(1, -1);
            } else if (cadenaContext.variable()) {
                const nombreVariable = cadenaContext.variable().NOMBRE().getText();
                if (declaredVars.has(nombreVariable)) {
                    valorImprimir = variableValues.get(nombreVariable)?.toString() ?? "";
                } else if (declaredFuns.has(nombreVariable)) {
                    valorImprimir = funValues.get(nombreVariable)?.toString() ?? "";
                } else {
                    console.error(`Error: la variable ${nombreVariable} no fue declarada para imprimir.`);
                    return;
                }
            } else {
                console.error("Error: No se encontró un valor de cadena válido para imprimir.");
                return;
            }
        } else {
            console.error("Error: No se encontró un valor válido para imprimir.");
            return;
        }

        // Verificar y eliminar comillas dobles antes de imprimir
        if (typeof valorImprimir === 'string' && valorImprimir.includes('"')) {
            valorImprimir = valorImprimir.replace(/"/g, ''); // Elimina todas las comillas dobles
        }

        console.log(valorImprimir);
    }


    visitRetornoTexto(ctx) {
        let valorRetorno;
        const valorContext = ctx.valor();

        if (valorContext.NUM()) {
            const numero = valorContext.NUM().getText();
            if (isNaN(numero)) {
                console.error(`Error: El valor ${numero} no es un número válido.`);
                return;
            } else {
                valorRetorno = numero;
            }
        } else if (valorContext.cadena()) {
            const cadenaContext = valorContext.cadena();
            if (cadenaContext.texto()) {
                const textoContext = cadenaContext.texto();
                valorRetorno = textoContext.getText().slice(1, -1);
            } else if (cadenaContext.variable()) {
                const variable = cadenaContext.variable().NOMBRE().getText();
                if (!declaredVars.has(variable)) {
                    console.error(`Error: la variable ${variable} no fue declarada`);
                    return;
                } else {
                    valorRetorno = variableValues.get(variable);
                }
            } else {
                console.error("Error: No se encontró un valor de cadena válido en el retorno.");
                return;
            }
        } else {
            console.error("Error: No se encontró un valor válido en el retorno.");
            return;
        }

        funValues.set(lastFuncion, valorRetorno);
    }

    visitCarNum(ctx) {
        return ctx.caract().map(c => this.visit(c)).join('');
    }

    visitCarSimb(ctx) {
        return ctx.getText();
    }

    visitCarLetra(ctx) {
        return ctx.getText();
    }

    visitCarEspacio(ctx) {
        return ' ';
    }
    
}