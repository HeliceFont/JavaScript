// Un EVENTO es una función que se ejecuta cuando pasa algo

// Eventos del ratón onclick="cambiaColor"en HTMLEvent
// var boton = document.querySelector('#boton');

window.addEventListener('load', () =>{


    function cambiarColor(){
            console.log("Me has dado click");
            var bg = boton.style.background;
            if(bg == "green"){
                boton.style.background = "red";
                
            }else{
                boton.style.background = "green";
            }
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";
            return true;
        }
        // Con el trozo anterior de codigo si vas dando click al boton cambia de color


        // Evento CLICK - ADB .addeventListenner Escuchador de eventos, este codigo hace que sea posible crear eventos en JS
        // Sin necesidad de tener más limpio HTML
        var boton = document.querySelector("#boton");//Seleccionar el id de la etiqueta HTML

        boton.addEventListener('click', function(){
            cambiarColor();
        });

        // Mouse over cuando pasas por encima con el ratón cambia de color
        boton.addEventListener('mouseover', function(){
            boton.style.background = "#ccc";
        });

        // Mouse out cuando salgas del boton se cambia de color
        boton.addEventListener('mouseout', function(){
            boton.addEventListener = "yellow";
        });

        // Focus cuando se hace focus es decir se clica o posiciona encima
        var input = document.querySelector('#campo_nombre');
        input.addEventListener('focus', function(){
            console.log("[focus]Estás dentro del input");
        });

        // Blur
        input.addEventListener('blur', function(){
            console.log("[blur]Estás fuera del input");
        });

        // Keydown - Registra las teclas que se pulsan
        input.addEventListener('keydown', function(){
            console.log("[keydown]Pulsando esta Tecla", String.fromCharCode(event.keyCode));
        });

        // Keypress
        input.addEventListener('keypress', function(){
            console.log("[keypress]Tecla Presionada ", String.fromCharCode(event.keyCode));
        });

        // Keyup
        input.addEventListener('keyup', function(){
            console.log("[keyup]Tecla Soltada ", String.fromCharCode(event.keyCode));
    });
});// end load