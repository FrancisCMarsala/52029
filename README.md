# Analizador Tema 25914_11

Este proyecto implementa un analizador de operaciones con cadenas usando ANTLR y Node.js.

## Requisitos

- Node.js instalado
- ANTLR 4.13.2

## Cómo ejecutar

1. Cloná el repositorio:

```bash
git clone https://github.com/FrancisCMarsala/52029.git
```

2. Andá a la ubicación del archivo

```bash
cd analizador-cadenas
```

3. Instalá las dependencias

```bash
npm install
```

4. Abrí el programa de Visual Studio Code

```bash
code .
```

# Utilizar el analizador

- En el proyecto se encontrará un archivo bash``` input.txt ``` vacío. Copia los inputs ubicados en el repositorio copiandolos y pegandolos en el proyecto en VS code.
  
- Una vez colocado el input, puedes presionar ``` f5 ```, para ver su estructura sintactica.
  
- Para ejecutar el código, abre la terminal con ``` ctrl + Ñ ``` o desde la ventana terminal y ejecuta el código ``` npm start ```.
  
  - En caso de tener algun problema coloca en la terminal: ``` Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```
    
 
# Reglas para el uso de la gramática

## Declaración de variables

Se puede declarar variables asignandole un valor o sin declararle ningún valor de la forma:
```bash
  Variable X = 1;
  variable Y;
```
Las variables pueden tener valores de tipo cadena o de tipo entero positivo.

## Funciones

Se pueden declarar funciones con argumentos o sin argumentos. Dentro de la función solo se podran usar las variables pasadas como argumento, y dentro de la función se podra imprimir, tranformar o devolver un valor, pero NO se podra usar la concatenación.

