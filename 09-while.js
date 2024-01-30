'use strict';
//Bucle While
var year = 2023
//mientras year sea menor o igual que 2051 
while(year <=2051){
    //ejecuta esto
    console.log("estamos en el año:" +year)
    year++;
}
//Do while
/*En el Bucle Do While, 
ejecuta primero un bloque de código 
y luego comprobamos una condición para hacer de nuevo ese bloque
es decir: haz una alerta: do{alert("SOLO CUANDO sea menor de 30");
decremento en años: years--;
Mientras sea mayor a 25: while(years > 25);
muestra 5 alertas si no usas un break*/ 
var years = 30;
do{
    alert("SOLO CUANDO sea menor de 30");
    years--;
    
}while(years > 25);