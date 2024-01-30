'use strict';
//Plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

//var texto = "Mi nombre es: " +nombre+ " <br/> Mis apellidos son: " +apellidos;

var texto = `
    <h1>Hola, ${nombre} Bienvenido.</h1>
    <h3>Mi nombre y apellidos es: ${nombre} ${apellidos}</h3>
`;
document.write(texto);