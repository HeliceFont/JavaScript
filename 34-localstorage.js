// LocalStorage

// para comprobar si el localstorage esta disponible podemos hacer:
if(typeof(localStorage) !== 'undefined'){ 
    console.log("localStorage Disponible");
}else{
    console.log("localStorage incompatible");
};

// Cómo guardar un dato en el localStorage
localStorage.setItem("Titulo", "Curso de symfony de victor");

// Recuperar elemento 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo")

// Guardar Objetos JSON
var usuario ={
    nombre: "Luis Manuel",
    apellido: "Camacho",
    web: "helicex.es"
};
// Pasar Object JSON a String
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar Objeto JSON
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
// añade mi elemento a la etiqueta peliculas
document.querySelector("#peliculas").append("Bienvenido, "+userjs.nombre+" ¿Qué te apetece buscar hoy?");

// Para borrar un elemento del localStorage
localStorage.removeItem("usuario");

// Para vaciar el localStorage
localStorage.clear(); 