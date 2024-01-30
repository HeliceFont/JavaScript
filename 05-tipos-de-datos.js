'use strict';
//OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
alert('el resultado de la operacion es: ' + operacion); 

//TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto = "Hola que tal";
console.log(cadena_texto);

var numero_falso = "32,2";
console.log(parseFloat(numero_falso)+7);
//console.log(Number(numero_falso)+7);lo compara con un numero
//console.log(parseint(numero_falso)+7);No muestra decimales
//console.log(String(numero_falso)+7); muestra concatenacion de textos
var verdadero_o_falso= true;
console.log(verdadero_o_falso);
//Operador de tipo de datos TYPE OF
console.log(typeof numero_entero);//numbuer
console.log(typeof cadena_texto);//String
console.log(typeof verdadero_o_falso);//boolean
//la consola nos devuelve el tipo de dato que es con typeof.