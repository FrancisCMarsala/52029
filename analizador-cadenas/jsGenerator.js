import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8').trim().split(/\r?\n/);

let jsCode = '';
let insideFunction = false;

input.forEach(line => {
    line = line.trim();

    if (line === "") {jsCode += "\n"; return}// 🔁 Saltear líneas vacías

    // Iniciar función con o sin argumentos
    if (/^funcion\s+[a-zA-Z_][a-zA-Z0-9_]*\s*(\([^\)]*\))?\s*{$/.test(line)) {
        const [, nombre, argumentos] = line.match(/^funcion\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\(([^\)]*)\))?\s*{$/) || [];
        const args = argumentos ? argumentos : '';
        jsCode += `function ${nombre} ${args} {\n`;
        insideFunction = true;
    }

    // Cierre de función
    else if (/^}$/.test(line)) {
        jsCode += '}\n';
        insideFunction = false;
    }

    // Return
    else if (/^devolver\s+.+;$/.test(line)) {
        const [, valor] = line.match(/^devolver\s+(.+);$/);
        jsCode += `  return ${valor};\n`;
    }

    // Imprimir
    else if (/^imprimir\s*\((.+)\)\s*;$/.test(line)) {
        const [, contenido] = line.match(/^imprimir\s*\((.+)\)\s*;$/);
        jsCode += `  console.log(${contenido});\n`;
    }

    // Declaración con valor
    else if (/^variable\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*".*";$/.test(line)) {
    const [, nombre, valor] = line.match(/^variable\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*"(.*)";$/);
    jsCode += `let ${nombre} = "${valor}";\n`;
    }

    // Declaración sin valor
    else if (/^variable\s+[a-zA-Z_][a-zA-Z0-9_]*\s*;$/.test(line)) {
        const [, nombre] = line.match(/^variable\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*;$/);
        jsCode += `let ${nombre};\n`;
    }

    // Concatenación
    else if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*[^+\s]+(\s*\+\s*[^+\s]+)+\s*;$/.test(line)) {
        jsCode += line.replace(/;/, '') + ';\n';
    }

    // Transformación
    else if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*(mayuscula|minuscula|longitud|invertir|reemplazar)\s*\((.+)\)\s*;$/.test(line)) {
    const [, varName, operacion, contenido] = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(\w+)\s*\((.+)\)\s*;$/);

    switch (operacion) {
        case "mayuscula":
            jsCode += `${varName} = ${contenido}.toUpperCase();\n`;
            break;
        case "minuscula":
            jsCode += `${varName} = ${contenido}.toLowerCase();\n`;
            break;
        case "longitud":
            jsCode += `${varName} = ${contenido}.length;\n`;
            break;
        case "invertir":
            jsCode += `${varName} = ${contenido}.split("").reverse().join("");\n`;
            break;
        case "reemplazar":
            const args = contenido.split(',').map(arg => arg.trim());
            if (args.length === 1) {
                jsCode += `${varName} = ${args[0]};\n`;  // reemplazar(x) → x
            } else if (args.length === 2) {
                jsCode += `${varName} = ${args[0]}.replaceAll(${args[1]}, "");\n`;
            } else {
                jsCode += `// ⚠️ Error: 'reemplazar' debe tener 1 o 2 argumentos\n`;
            }
            break;
        default:
            jsCode += `// ⚠️ Operación no reconocida: ${operacion}\n`;
    }
}

    // Cualquier otra línea
    else {
        jsCode += `// Línea no reconocida: ${line}\n`;
    }
});

console.log("\n 🌐 CÓDIGO ESCRITO POR JAVASCRIPT:\n");
console.log(jsCode);
