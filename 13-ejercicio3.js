'use strict';
/*Hacer un programa que muestre todos los numeros que hay entre 2 números introducidos
por el usuario*/
/*Las 2 principales variables son los números que introduce el usuario
numero1 y numero2, con la variables claras, vamos decirle a las variables
que convierta el String en numero parseint
y además el pompt donde se introduce el numero, número por defecto es 0,)) */
var numero1 = parseInt(prompt("introduce el primer número",0));
var numero2 = parseInt(prompt("introduce el segundo número",0));

document.write("<h1>De " +numero1+ " a " +numero2+ " están estos números:</h1>")
/*La variable que inicializa el FOR le está indicando una variable i =numero1*/

for(var i= numero1; i <= numero2; i++){
    document.write(i+ "<br/>");
    document.write(i- "<br/>");
}

    /*}if( i>= numero2; i--){
        document.write(-i "<br/>");*/
    debugger;

    



