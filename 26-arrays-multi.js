
var peliculas =['Los juegos del hambre', 'dos tontos muy tontos', 'Annabella'];
var categorias = ['Terror', 'acción', 'Comedia'];	
categorias.reverse();
console.log(categorias);
var cine = [categorias, peliculas];

console.log(cine[0][1]);
//peliculas.push("Batman");//el método .push añade un elemento a un array
/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "ACABAR")

peliculas[0]= undefined;//Si quiero deshabilitar el 0 de un array
peliculas.pop();//PARA BORRAR LA PALABRA ACABAR USAMOS EL MÉTODO .POP
*/

//console.log(peliculas);
//Pimero buscamos el indice en el que se encuentra el elemento que queremos eliminar
var indice = peliculas.indexOf('Annabella');


//.Splice nos permite en base a un indice borrar tantos pasos como yo quiera
if (indice > -1){
    peliculas.splice(indice, 2)
};
//para convertir un array a texto hay que usar el método .join();
var peliculas_string = peliculas.join();

//convertir String en array
var cadena_de_texto = "estoy buscando un producto para cocinar spaguetis"
var cadena_array = cadena_de_texto.split(" ");
    console.log(cadena_array);
