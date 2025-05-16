import MyGramarLexer from "./generated/MyGramarLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomGramCadenasVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';


class ThrowingErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw new Error(`Línea ${line}, columna ${column}: ${msg}`);
    }
}

import { exec } from 'child_process';

exec('node jsGenerator.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error al ejecutar el traductor: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️ STDERR: ${stderr}`);
    }
    console.log(stdout);
});

async function main() {
    let input;
    let semanticErrorDetected = false;
    const originalConsoleError = console.error;

    console.error = (...args) => {
        originalConsoleError(...args);
        if (args.some(arg => typeof arg === 'string' && arg.startsWith("Error:"))) {
            semanticErrorDetected = true;
        }
    };

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("❌ No se pudo leer el archivo input.txt.");
        return;
    }

    try {
        const inputStream = CharStreams.fromString(input);
        const lexer = new MyGramarLexer(inputStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ThrowingErrorListener());

        const tokenStream = new CommonTokenStream(lexer);
        const parser = new CalculatorParser(tokenStream);
        parser._rawInput = input;
        parser.removeErrorListeners();
        parser.addErrorListener(new ThrowingErrorListener());

        const tree = parser.programa();

        console.log("\n✅ Entrada válida.");
        console.log("\n📌 Tabla de Lexemas:");
        tokenStream.fill();
        tokenStream.tokens.forEach(token => {
            const tokenName = MyGramarLexer.symbolicNames[token.type];
            if (tokenName) {
                console.log(`${token.text} → ${tokenName}`);
            }
        });

        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\n🌳 Árbol de derivación: ${cadena_tree} \n \n 💻 PROGRAMA: \n `);

        const visitor = new CustomCalculatorVisitor();
        visitor.parser = parser;
        visitor.visit(tree);

    } catch (e) {
        originalConsoleError("\n❌ Se detectó un error sintáctico durante el análisis: " );
        originalConsoleError(e.message);
        process.exit(1);
    } finally {
        console.error = originalConsoleError; // Restaura la función original de console.error
        if (semanticErrorDetected) {
            console.error("\n❌ Error semántico detectado durante el análisis.");
            process.exit(1);
        }
    }
}

main();


