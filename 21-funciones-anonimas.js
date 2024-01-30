'use strict';
//Funciones anónimas
/*Una función anónima no es más que una función que notiene nombre,
es decir, que ese conjunto de instrucciones no va a tener ningún nombre
y se puede guardar dentro de una variable de forma
que esto se suele utilizar muchísimo, sobre todo para hacer callbacks, 
un callbacks es una función que se ejecuta dentro de otra para explicarlo de forma sencilla.*/
/*var pelicula = function(nombre){
    return "La pelicula es:" +nombre;

}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar= numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;

}
sumame(5, 7, (dato)=> {
    console.log("La Suma es:", dato);
},
(dato) =>{
    console.log("La Suma Por Dos es:", (dato*2));
});
