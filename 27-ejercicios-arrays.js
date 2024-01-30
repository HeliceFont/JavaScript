/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
    (Se valorará el uso de funciones)
*/
var numeros = new Array(5);
document.write("<h1>Los Número Seleccionados Son:</h1>");


//for Tiene 3 partes, el contador, la condición y el aumento
for( var i=0; i <= 5; i++){
    numeros[i] = parseInt(prompt("introduce un número:", 0));
    
};

numeros.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"º  "+elemento+"</li>");
    
});
document.write("<ul>");
numeros.sort((a, b) => a - b);
console.log(numeros);

document.write("<h1>Esta esta es la Lista Ordenada: </h1>");
for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");
};

document.write("<h1>Esta es la lista invertida: </h1>");
numeros.reverse().forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
});
document.write("</h1>El ARRAY tiene: "+numeros.length+" Elementos</h1>");

// busqueda
var busqueda = parseInt(prompt("busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1 ){
document.write("<h1>ENCONTRADO</h1>");
document.write("posición de la búsqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
};











