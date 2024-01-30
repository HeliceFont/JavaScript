'use strict';
//FUNCIONES

/*Las Funciones son una agrupación reutilizable de un conjunto de INSTRUCCIONES*/
//Se define la función
/*function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instucciones
    if(mostrar == false){
    console.log("Suma: " + ( numero1 + numero2 ));
    console.log("Resta: " + ( numero1 - numero2));
    console.log("Multiplicación: " + ( numero1 * numero2));
    console.log("División: " + ( numero1 / numero2));
    console.log("*******************************");
    }else{
    document.write("Suma: " + ( numero1 + numero2 )+ "<br/>");
    document.write("Resta: " + ( numero1 - numero2)+ "<br/>");
    document.write("Multiplicación: " + ( numero1 * numero2)+ "<br/>");
    document.write("División: " + ( numero1 / numero2)+ "<br/>");
    document.write("*******************************" + "<br/>");
    }
    //return "Hola soy la calculadora";
}*/
//invocar o llamar a la función 
/*calculadora(8, 45);*/


/*
//invocar o llamar a la función 
for(var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);
}*/
function porPantalla(numero1, numero2) {
    document.write("Suma: " + ( numero1 + numero2 )+ "<br/>");
    document.write("Resta: " + ( numero1 - numero2)+ "<br/>");
    document.write("Multiplicación: " + ( numero1 * numero2)+ "<br/>");
    document.write("División: " + ( numero1 / numero2)+ "<br/>");
    document.write("*******************************" + "<br/>");
}
function porConsola(numero1, numero2) {
    console.log("Suma: " + ( numero1 + numero2 ));
    console.log("Resta: " + ( numero1 - numero2));
    console.log("Multiplicación: " + ( numero1 * numero2));
    console.log("División: " + ( numero1 / numero2));
    console.log("*******************************");
}
function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar === false) {
        porConsola(numero1, numero2);
}else{
    porPantalla(numero1, numero2);
    }
}


//invocar o llamar a la función
calculadora(1, 4);
calculadora(2, 5, true);
