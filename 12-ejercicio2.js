'use strict';
/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/
var suma= 0;
var contador = 0;
do{
    /*metemos la variable numero, con un prompt para introducir los números y 
    le indicamos que son números, parseint, para indicarle que de un STRING pase
    a numero entero.
    número por defecto 0,));
    */
    var numero = parseInt(prompt('Introduce números hasta que metas uno negativo',0));
    /*si isNaN (si no es un número) el valor de número sería igual a 0*/ 
    if (isNaN(numero)){
        numero=0;
    //si  el número es menor a 0 suma
    }else if (numero >= 0){
        suma= suma + numero;
        //suma += numero; es lo mismo que suma= suma + numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
//Haz una variable
}while(numero >= 0);
alert("la suma de todos los números es:" + suma)
alert("la media de todos los numeros es:"+ (suma/contador));