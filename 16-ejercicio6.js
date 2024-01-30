'use strict';
/*
Hacer un programa que nos diga si un número es par o impar,
1. ventana prompt 
2.Si no es valido que nos pida de nuevo el número
3.Por último que nos diga si es par o impar
*/
var numero = parseInt(prompt("Introduce un número entero: " ,0));
//Mientras que sea una letra o algo que no sea un número
while(isNaN(numero)){
    //el bucle volverá a pedir otra número con el mismo prompt
    var numero = parseInt(prompt("Introduce un número entero: " ,0));
    //si el número dividido entre 2 es = a 0 mostrar alerta
}if(numero%2 == 0){
    alert("Éste número es par " +numero);
    //si el número dividido entre 2 NO es = a 0 mostrar alerta
}else if(numero%2 != 0){
    alert("Éste número es impar " +numero);
};