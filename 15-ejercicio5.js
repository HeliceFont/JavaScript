'use strict'
/*
Programa que muestre todos los números divisores de un número introducido en un prompt 
*/
/*En primer lugar indicamos la variable número, 
junto con parseInt para indicar que el valor introducido es un número entero,
y  un prompt con un string y valor predeterminado 1*/
var numero= parseInt(prompt("Mete un Número", 1));

for(var i = 1; i <= numero; i++) {
    if(numero%i == 0){
        console.log("Divisor:" + i);
    }
    
}