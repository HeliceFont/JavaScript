'use strict';
/*
mostrar todos los números impares que hay entre 2 números introducidos por el usuario
*/
var numero1= parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (numero1 < numero2) {
    //incremento del número para, si es impar imprimir en consola, el número es impar.
    numero1++;
    //Si el resto de numero1 entre 2 no es igual a 0, mostrar que es impar
    if(numero1%2 != 0){
        console.log("El " +numero1+ " es impar");
    }
}
