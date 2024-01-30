
var nombre = "Victor";
var nombres = ["Victor", "Luis", "Juan","Manuel", 52, true];

//Array Objeto
var lenguajes = new Array("PHP", "JS", "JAVA", "C#");
/*
console.log(nombres[2]);
console.log(lenguajes);
console.log(nombres.length);
//Podemos pedir que nos diga el elemento que estaá en el indice que le indiquemos 
var elemento = parseInt(prompt("Que elemento del Array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el número correcto, menor que " + nombres.length);
}else{
    alert("El usuarrio Seleccionado es:"+nombres[elemento])
}
alert(nombres[elemento]);*/

document.write("<h1>Lenguajes de Programación del 2018</h1>");
document.write("<ul>");
/*
for(var i = 0; i< lenguajes.length; i++){ 
    document.write("<li>"+lenguajes[i]+"</li>");
}*/
/*
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" . "+elemento+"</li>");
}); */

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//Búsquedas dentro de un array
/*var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP"
});
console.log(busqueda);*/
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);//Busqueda de String
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda);//Busqueda de indice

//array de Números
var precios = [10, 20, 30, 50, 80, 12];
var busqueda2 = precios.some(precio => precio >= 85);
console.log(busqueda2);//Respuesta false porque no hay un precio mayor de 85