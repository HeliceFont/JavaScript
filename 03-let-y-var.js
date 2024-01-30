'use strict';

//Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero);//valor 40

if(true){
    var numero= 50;
    console.log(numero);//valor 50
}
/*En este caso el valor que muestra la consola,
situado en el bloque if, es modificado, pero sin embargo
lo mantiene cuando ejecutas la console.log fuera del bloque*/

console.log(numero)//valor 50

//Prueba con let 
var texto = "curso js victor";
console.log(texto);//valor curso js victor

if(true){
    let texto = "otro curso";
    console.log(texto)/*valor otro curso 

    <-- lo que hace es modificar ese valor solo en ese bloque,
    sí, fuera del bloque usamos console.log, la consola nos devuelve 
    la variable var (curso js victor)*/
}
console.log(texto);//valor curso js victor