'use strict';
//Parámetros de REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas ){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}
listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón");

var frutas = ["Naranja", "Manzana"]
listadoFrutas(...frutas, "Sandía", "Pera", "Melón");
//al invocar el array frutas en el puesto1 el array aparece en Fruta 1: