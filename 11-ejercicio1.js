'use strict';
/* Programa que pida 2 números y que nos diga cual es el mayor,
el menor y si son iguales*/ 
var numero1 = parseInt(prompt('introduce el número1',0));
var numero2 = parseInt(prompt('introduce el número2',0));
/*Para comenzar vamos a pensar cuales son las variables, 
en éste caso son 2 números,
número1 y número2,estos son los parámetros que vamos a comparar,
por lo tanto esa variable tiene que ser nombrada como 
parseint o parsefloat si quieres que muestre decimales,
También hay que añadir, un prompt para introducir datos,
junto con la cadena de texto que indica al usuario que introduzca
un número, poniendo cómo número por defecto, 0));*/
console.log(numero1, numero2);
/*Ejecutamos la consola con nuestras 2 variables
Ya tenemos las 2 entrada de datos,
ahora necesitamos que las compare y nos dé una respuesta*/

/*Usamos el condicional if para ejecutar mediante alertas
el mensaje que transmitimos según los valores de las variables */
if (numero1 == numero2){
    alert("LOS NUMEROS SON IGUALES");
    /*Si no son iguales y si numero1 es mayor que numero2 */
}else if (numero1 > numero2){
    alert("EL NUMERO MAYOR ES:" + numero1 );
    alert("EL NUMERO MENOR ES:" + numero2 );
    /*Y si número1 es menor que número2 */
}else if (numero1 < numero2){
    alert("EL NUMERO MAYOR ES:" + numero2 );
    alert("EL NUMERO MENOR ES:" + numero1);
} 

/*PLUS: Si los números no son números o son menores 
o iguales a 0 nos lo vuelva a pedir*/
