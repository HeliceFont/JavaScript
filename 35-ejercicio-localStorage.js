'use strict';
var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit', () =>{
    var titulo = document.querySelector('#addpelicula').value;
    // var peliculas = document.querySelector('#peliculas');
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
    //coloar en el localStorage Calve y valor (titulo, titulo)
    localStorage.setItem[titulo, titulo];
});

var ul = document.querySelector('#peliculas-list');
for (var i in localStorage){
    
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.appendChild(li);
    };
}

// eliminar/Borrar un elemento de la lista
var formulariob = document.querySelector("#formborrarPeliculas");
formulariob.addEventListener('submit', () =>{
    var titulo = document.querySelector('#borrarpelicula').value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});