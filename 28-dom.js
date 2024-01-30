
//  DOM - Document Objets Model
// Conseguir elementos con un ID concreto
function cambiaColor(color){
    caja.style.background = color;
};

//esta es una forma que sirve también para seleccionar elementos por id en hHTML
//var caja = document.getElementById("micaja"); 


// Document.querySelector() hace la misma función que document.getElementById("micaja")
// sino que además te permite introducir el elemento segun su id #id, clase .clase y etiqueta
var caja = document.querySelector("#micaja");

// innertHTML puede modificar un texto del HTML desde JS
caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"; 
// Tambien podemos modificar estilos usando .style
caja.style.background ="red";
caja.style.padding = "20px";
caja.style.color = "white";
// Tambien podemos añadirle una clase
caja.className = "Hola hola2";

// Conseguir elementos por sus etiquetas ¡OJO ESTE ELEMENTS lleva S!
var todosLosDivs =document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
// crear elementos
var hr = document.createElement("hr");
// seccion.prepend(hr);
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
        // seccion.append(hr);
        seccion.prepend(hr);
    }
};


// Conseguir elemento por Clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');
divsAmarillo[0].style.background = "yellow";

var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}
console.log(divsRojos);
// QuerySelector sirve para capturar o seleccionar un elemento ID
var id = document.querySelector("#encabezado");
console.log(id);
var claseRojo = document.querySelector(".rojo");
console.log(claseRojo); // Solo selecciona 1 div de la clase rojo


//console.log(todosLosDivs);