# ANALIZADOR TEMA 25914_11 

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
cd 52029/analizador-cadenas
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
- ```jsGenerator.js```: Pasa el codigo que se encuentra en el index a lenguaje java script


## UTILIZAR EL ANALIZADOR

- En el proyecto se encontrará un archivo ``` input.txt ``` vacío. Insertá los inputs ubicados en el repositorio copiandolos y pegandolos en el proyecto en VS code y apretando ```Ctrl + S```.
  
- Una vez colocado y guardado el input, puedes presionar ``` f5 ```, para ver su estructura sintactica.
  
- Para ejecutar el código, abre la terminal con ``` ctrl + Ñ ``` o desde la ventana terminal y ejecuta el código ``` npm start ``` o ```node index.js```.
  
  - En caso de tener algun problema coloca en la terminal: ``` Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```
    
## DESCRIPCION BREVE DEL FUNCIONAMIENTO DEL ANALIZADOR
  La gramática permite hacer uso de variables y funciones ademas de realizar distintas acttividades con cadenas de texto como transformarlas, concatenarlas e imprimirlas. En la consola se veran solo las cadenas sometidas a un codigo 'imprimir()' y los mensaje de errores en caso de haberlos. Además de las funcionalidades del programa principal, debajo se encuentra el código de mi gramática traducido al lenguaje javaScript.
 
## REGLAS PARA EL USO DE LA GRAMÁTICA

  ### DECLARACIÓN DE VARIABLEA

  Se puede declarar variables asignandole un valor o sin declararle ningún valor de la forma:
  
  ```
    variable X = 1;
    variable Y;
  ```

  Las variables pueden tener valores de tipo cadena o de tipo entero positivo.

  ### FUNCIONES

  Se pueden declarar funciones con o sin parámetros. Dentro de la función solo se podran usar las variables pasadas como argumento, y dentro de la función se podra ```imprimir```, ```tranformar``` o ```devolver``` un valor, pero NO se podra usar la concatenación. Ademas la funcion debe tener un nombre, los argumentos deben estar entre parentesis (en caso de no haber argumentos los parentesis no se ponen) y las instrucciones deben estar entre llaves.

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

  Se puede ```imprimir``` un valor, ya sea el contenido de una variable o función, una cadena o un número. Lo que sea se quiera imprimir debe estar entre parentesis.
  
      variable x = 10;

      imprimir (x);
      
    
  ### TRANSFORMACIÓN

  Para la transformación de una cadena, se debe poner una variable declarada seguido del operador '=' y las palabras ```minuscula```, ```mayuscula```, ```reemplazar```, ```invertir``` o ```longitud``` seguido de una cadena (ya sea una cadena explicita o una variable con el valor de una cadena asignada) que obligatoriamente tiene que estar entre parentesis.
  
      variable x = 10;

      x = mayuscula (hola);
      

  ### CONCATENACIÓN

  Para la concatenación de dos cadenas, se debe poner una variable declarada seguido del operador '=' y dos cadenas o variables con contenido de una cadena puestas entre el operador '+'.
  
      variable x = "Hola ";
      variable y;

      y = x + "Mundo!";

  ### REGLAS GENERALES:

  - Todas las sentencias deben terminar con ```;```
  - No pueden haber funciones o variables con el mismo nombre.
  - En las funciones, no pueden haber concatenaciones, ni variables no definidas en el argumento
  - Como se especifica en la gramática, las variables se declaran con un ```<valor>``` por lo que no se permite declarar una variable con una concatenación o transformación. 

    - ❌ Ejemplo de sentencias no válidas:

          variable z = x + y;
          variable z = mayuscula (x);

    - ✅ Ejemplo de sentencias válidas:

          variable x = "Hola ";
          variable y = "Mundo";
          variable z;
          z = x + y;
          z = mayuscula (x);
      
  - La concatenación solo acepta variables tipo cadena, al igual que la transformacion 

  ## RESULTADOS ESPERADOS:

  Una vez ejecutado el programa se veran 4 secciones en la terminal. La tabla de lexemas, el árbol de derivación, el programa hecho por el input y el código del input en lenguaje javaScript

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

      💻 PROGRAMA:

      Hola Mundo!
      HOLA MUNDO!
      
      ...

      🌐 CÓDIGO ESCRITO POR JAVASCRIPT:

      let mensaje1 = "Hola, ";
      let mensaje2 = "Mundo!";

      console.log(mensajeCompleto);

      ...



