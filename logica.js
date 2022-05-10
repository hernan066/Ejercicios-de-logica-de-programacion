////////////////////////////////////////
//Ejercicios de logica de programacion
////////////////////////////////////////


//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const contarCaracteres = (cadena) => {
  return cadena.length;
};

console.log(contarCaracteres("Hola Mundo")); //10
console.log(contarCaracteres("Hola")); //4
console.log(contarCaracteres("Hola Mundo hola mundo")); //21
console.log(contarCaracteres("Chau Mundo")); //10

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

//Tambien se puede hacer con substring
//En una sola linea const recortarCadena = (cadena, numCaracteres) => cadena.substring(0, numCaracteres);
const recortarCadena = (cadena, numCaracteres) => {
  return cadena.slice(0, numCaracteres);
};

console.log(recortarCadena("Hola Mundo", 4));
console.log(recortarCadena("Hola Mundo", 1));
console.log(recortarCadena("Hola Mundo", 6));
console.log(recortarCadena("Hola Mundo", 10));

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const separarCadena = (cadena, separador) => {
  return cadena.split(separador);
};

console.log(separarCadena("Hola Mundo", " "));
console.log(separarCadena("hola que tal", " "));
console.log(separarCadena("Hola Mundo", "ola"));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirCadena = (cadena, numero) => {
  let resultado = "";
  for (let i = 0; i < numero; i++) {
    resultado = resultado + cadena + " ";
    console.log(resultado);
  }
  return resultado;
};

console.log(repetirCadena("Hola Mundo", 3));

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena) => {
  return cadena.split("").reverse().join("");
};

console.log(invertirCadena("Hola Mundo"));

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarRepetidos = (cadena, palabra) => {
  let contador = 0;
  let palabras = separarCadena(cadena, " ");
  console.log(palabras);

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabra) {
      contador++;
    }
  }
  return contador;
};

console.log(contarRepetidos("hola mundo adios mundo", "mundo"));

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const esPalindromo = (cadena) => {
  return cadena.split("").reverse().join("") === cadena;
};
console.log(esPalindromo("salas"));
console.log(esPalindromo("hola"));
console.log(esPalindromo("salir"));
console.log(esPalindromo("ala"));

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
// el split se usa para separar la cadena de texto por cada caracter, ese caracter lo elimina, y devuelve un arraY 
//el join se usa para volver a unir la cadena de texto
const eliminarPatron = (cadena, patron) => {
  return cadena.split(patron).join("");
};

console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz"));

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => {
  return Math.floor(Math.random() * (601 - 500)) + 500;
};
console.log(numeroAleatorio());
console.log(numeroAleatorio());
console.log(numeroAleatorio());
console.log(numeroAleatorio());
console.log(numeroAleatorio());

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const esCapicua = (numero) => {
  return numero.toString() === numero.toString().split("").reverse().join("");
};

console.log(esCapicua(2002));
console.log(esCapicua(1221));
console.log(esCapicua(1234));

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero) => {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;
  }
  return resultado;
};

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));



