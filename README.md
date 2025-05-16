# ** ANALIZADOR TEMA 25914_11 **

Este proyecto implementa un analizador con la gramática y los requisitos proporcionados.

## REQUISITOS

- Node.js instalado
- ANTLR 4.13.2

## CÓMO EJECUTAR

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

## ESTRUCTURA DEL ANALIZADOR

- ```GramCadenas.g4```: Estructura de la gramática
- ```myGramarLexer.g4```: Lexemas
- ```input.txt```: Código leído por el analizador
- ```CustomGramCadenasVisitor.js```: Encargado de realizar los eventos al recorrer los nodos del árbol
- ```index.js```: Acopla las distintas partes del analizador


## UTILIZAR EL ANALIZADOR

- En el proyecto se encontrará un archivo ``` input.txt ``` vacío. Insertá los inputs ubicados en el repositorio copiandolos y pegandolos en el proyecto en VS code y apretando ```Ctrl + S```.
  
- Una vez colocado y guardado el input, puedes presionar ``` f5 ```, para ver su estructura sintactica.
  
- Para ejecutar el código, abre la terminal con ``` ctrl + Ñ ``` o desde la ventana terminal y ejecuta el código ``` npm start ``` o ```node index.js```.
  
  - En caso de tener algun problema coloca en la terminal: ``` Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```
    
 
## REGLAS PARA EL USO DE LA GRAMÁTICA

  ### DECLARACIÓN DE VARIABLEA

  Se puede declarar variables asignandole un valor o sin declararle ningún valor de la forma:
  
  ```
    Variable X = 1;
    variable Y;
  ```

  Las variables pueden tener valores de tipo cadena o de tipo entero positivo.

  ### FUNCIONES

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

  ### IMPRIMIR

  Se puede ```imprimir``` un valor, ya sea el contenido de una variable o función, una cadena o un número. Lo que sen quiere imprimir debe estar entre parentesis.
  
      variable x = 10;

      imprimir (x);
      
    
  ### TRANSFORMACIÓN

  Para la transformación de una cadena, se debe poner una variable declarada seguido del operados '=' y las palabras ```minuscula```, ```mayuscula```, ```reemplazar```, ```invertir``` o ```longitud``` seguido de una cadena (ya sea una cadena explicita o una variable con el valor de una cadena asignada) que obligatoriamente tiene que estar entre parentesis.
  
      variable x = 10;

      x = mayuscula (hola);
      

  ### CONCATENACIÓN

  Para la concatenación de dos cadenas, se debe poner una variable declarada seguido del operados '=' y dos cadenas o variables con contenido de una cadena puestas entre el operador '+'.
  
      variable x = "Hola ";
      variable y;

      y = x + "Mundo!";

  ### REGLAS GENERALES:

  - Todas las sentencias deben terminar con ```;```
  - No pueden haber funciones o variables con el mismo nombre.
  - No pueden haber concatenaciones en las funciones, ni variables no definidas en el argumento

  ## RESULTADOS ESPERADOS:

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
      



