'use strict'
/*
1. tabla de multiplicar de un número introducido por pantalla
*/
//
var numero = parseInt(prompt("introduzca un número para mostrar su tabla de miltiplicar" ,1));
//Podemos ponerle un título usando document.write
document.write("<h1> Tabla Del "+numero+"</h1>");

//para la variable i, le indicamos hasta que punto queremos llegar este caso a 10
for(var i = 1; i <= 10; i++){
    //impresión en pantalla de una concatenación de operadores
    document.write(i+ " X " +numero+ " = " +(i * numero)+ "<br/>");
}
/*
2. todas las tablas hasta la del numero que nos indica el usuario hasta 10
*/
for(var c = 1;  c <= 10; c++){
    //impresión en pantalla de una concatenación de 
    document.write("<h1> Tabla Del "+c+"</h1>");
    ;
    for(var i = 1; i <= 10; i++){
        //impresión en pantalla de una concatenación de operadores
        document.write(i+ " X " +c+ " = " +(i*c)+ "<br/>");
    }
}

