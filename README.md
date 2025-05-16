# Analizador Tema 25914_11

Este proyecto implementa un analizador con la gramática y los requisitos proporcionados.

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

# Estructura del analizador

- ```GramCadenas.g4```: Estructura de la gramática
- ```myGramarLexer.g4```: Lexemas
- ```input.txt```: Código leído por el analizador
- ```CustomGramCadenasVisitor.js```: Encargado de realizar los eventos al recorrer los nodos del árbol
- ```index.js```: Acopla las distintas partes del analizador


# Utilizar el analizador

- En el proyecto se encontrará un archivo ``` input.txt ``` vacío. Copia los inputs ubicados en el repositorio copiandolos y pegandolos en el proyecto en VS code.
  
- Una vez colocado el input, puedes presionar ``` f5 ```, para ver su estructura sintactica.
  
- Para ejecutar el código, abre la terminal con ``` ctrl + Ñ ``` o desde la ventana terminal y ejecuta el código ``` npm start ```.
  
  - En caso de tener algun problema coloca en la terminal: ``` Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```
    
 
# Reglas para el uso de la gramática

  ### Declaración de Variables

  Se puede declarar variables asignandole un valor o sin declararle ningún valor de la forma:
  
  ```
    Variable X = 1;
    variable Y;
  ```

  Las variables pueden tener valores de tipo cadena o de tipo entero positivo.

  ### Funciones

  Se pueden declarar funciones con argumentos o sin argumentos. Dentro de la función solo se podran usar las variables pasadas como argumento, y dentro de la función se podra ```imprimir```, ```tranformar``` o ```devolver``` un valor, pero NO se podra usar la concatenación. Ademas la funcion debe tener un nombre, los argumentos deben estar entre parentesis (en caso de no haber argumentos los parentesis no se ponen) y las instrucciones deben estar entre llaves.

  - Funcion con Argumentos
  ``` bash
    funcion primeraFuncion (var1, var2) {
      var1 = minuscula (var2);
      devolver var1;  
    } 
  ```
  - Función sin Argumentos
  
  ```    
    funcion segundaFuncion {
      imprimir ("Hola Mundo");  
    }
  ``` 

  ### Imprimir

  Se puede ```imprimir``` un valor, ya sea el contenido de una variable o función, una cadena o un número. Lo que sen quiere imprimir debe estar entre parentesis.
  
      variable x = 10;

      imprimir (x);
      
    
  ### Transformación

  Para la transformación de una cadena, se debe poner una variable declarada seguido del operados '=' y las palabras ```minuscula```, ```mayuscula```, ```reemplazar```, ```invertir``` o ```longitud``` seguido de una cadena (ya sea una cadena explicita o una variable con el valor de una cadena asignada) que obligatoriamente tiene que estar entre parentesis.
  
      variable x = 10;

      x = mayuscula (hola);
      

  ### Concatenación

  Para la concatenación de dos cadenas, se debe poner una variable declarada seguido del operados '=' y dos cadenas o variables con contenido de una cadena puestas entre el operador '+'.
  
      variable x = "Hola ";
      variable y;

      y = x + "Mundo!";

  ### Reglas Generales:

  Todas las sentencias deben terminar con ```;```

  # Resultados Esperados:

  En la consola se espera resultados similares a lo siguiente:

      ✅ Entrada válida.

      📌 Tabla de Lexemas:
      variable → VAR
      saludo → NOMBRE
      = → EQ
      "Hola" → TEXTO
      ; → SEMICOLON
      ...
      
      🌳 Árbol de derivación:
      (programa (declaracion ...) ...)

      PROGRAMA:

      Hola Mundo!
      HOLA MUNDO!
      



