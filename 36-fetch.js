'use strict';
// Fetch (ajax, peticiones asíncronas a un servidor) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_Janet = document.querySelector("#Janet");
var div_Profesor = document.querySelector("#profesor");

    getUsuarios()
// Lo primero que hacemos en las promesas es capturar la data
// lo convertimos a JSON mediante Funcion flecha
        .then(data => data.json())
    // Seleccionar la data de users
        .then(users => {
            listadoUsuarios(users.data);
            
            return getJanet ();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
            
            return getInfo();
        })
        .then(data =>{
            div_Profesor.innerHTML = data;
        })
// Para capturar errores en promesas vamos a usar el método .catch();
        .catch(error =>{
            console.log(error);
            
        })

function getUsuarios (){
        return fetch('https://reqres.in/api/users?page=2');
    }


    function getJanet (){
        return fetch('https://reqres.in/api/users/2');
    }
// En esta función añadimos la variable profesor, 
// le asignamos sus datos y la invocamos como una nueva promesa
    function getInfo(){
        var profesor = {
            nombre: 'Luis',
            apellidos: 'Camacho',
            correo: 'camacho485@gmail.com'
        };
        return new Promise((resolve, reject) =>{
            var profesor_string = "";
            // SetTimeout(function () lo uusamos para dar tiempo a que otras cosas carguen 
            // en este caso cargamos esta parte del código a les 3 segundos indicados abajo en milisegundos
            setTimeout(function(){
                profesor_string = JSON.stringify(profesor);

                if( typeof profesor_string != 'string'|| profesor_string == '') return reject('error 1');
                return resolve (profesor_string);
            }, 3000);
        });
    }

    function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = i + " " +user.first_name+ " " +user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        });
    }
// Esta función nos muestra Janet en h4, y la imagen de avatar 
    function mostrarJanet(user){
        console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_Janet.appendChild(nombre);
        div_Janet.appendChild(avatar);

        document.querySelector("#Janet .loading").style.display = 'none';
        
    }
   