/*
1. Formulario campos: Nombre, Apellidos y Edad
2. Boton de enviar formulario - evento submit
3. Mostrar datos por pantalla
4. Tener un boton que al darle click, nos muestra los datos actuales del formulario
*/


window.addEventListener('load', function(){
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', () =>{
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es válido");
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El apellido no es válido");
            return false;
        }
// isNaN is not a nuber, si edad no es un número
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es válida");
            return false;
        }
        
        box_dashed.style.display = "block";
        //Seleccionamos cada uno de los elementos y le añadimos el span del HTML
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = parseInt(document.querySelector("#p_edad span"));

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


        /*
        var datos_usuario = [nombre, apellidos, edad];
        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */
    });
});
// Creamos un array datos_usuario =[nombre, apellidos, edad]