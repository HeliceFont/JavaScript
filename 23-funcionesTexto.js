'use strict';
//Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso  de Victor";
var texto2 = "es muy buen curso";
var dato = numero.toString();//Convierte a String
    dato = texto1.toUpperCase();
    //convierte a mayúsculas, para minúscula .toLowerCase();
//console.log(dato);

//Clacular longitud de TEXTO 
var nombre = "Hola mi nombre es Luis Manuel y estudio programación";

console.log(nombre.length);
//Cuenta el número de letras que tiene un texto, sirve para contar elementos

//Concatenar - unir textos
//var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+texto2)
console.log(textoTotal);
//Métodos de búsqueda

var busqueda = texto1.indexOf("curso");
console.log(busqueda);
var busqueda = texto1.search("curso");
console.log(busqueda); 
//Si le ponemos al String 2 veces curso mostrará lo siguiente:
//var texto1 = "Bienvenido al curso de JavaScript curso de Victor";
var busqueda = texto1.match(/curso/gi);
console.log(busqueda);
// si lo que necesitas es extraer las letras que hay desde el puesto 14, 5 letras
var busqueda = texto1.substr(14,5);
console.log(busqueda);
//Para sacar una letra
var busqueda = texto1.charAt(44);
console.log(busqueda);
//Para buscar textos especícicos, muestra en consola true si empieza igual que texto1
var busqueda = texto1.startsWith("Bienvenido al curso")//true
//var busqueda = texto1.startsWith("de JavaScript")//false
console.log(busqueda);
//Si queremos buscar el texto final del String
var busqueda = texto1.endsWith(" de Victor")//true
console.log(busqueda);
//Busca la palabra exacta .includes
var busqueda = texto1.includes("JavaScript");
console.log(busqueda);
//Funciones de reemplazo
var busqueda = texto1.replace("JavaScript", "Symfony");
console.log(busqueda);
//.slice cuya función es cortar un texto a partir del String que se le indique
var busqueda = texto1.slice(14, 22);
console.log(busqueda);
//.split Nos sirve para recortar las palabras y meterlas en un ARRAY
var busqueda = texto1.split(" ");
console.log(busqueda);
//El método .trim es esencial, 
//básicamente se usa para no guardar los espacios 
// que se dejan por delante y por detrás de un String
var busqueda = texto1.trim();
console.log(busqueda);