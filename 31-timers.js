window.addEventListener('load', function(){

    function intervalo(){
//  Timers - Intervalos
    var tiempo = setInterval(function(){
        
            console.log("Set interval ejecutado");

    var encabezado = document.querySelector("h1");
        // Si el encabezado es de 50px pasalo a 30px si no es 30px pasalo a 50 px 
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }

    }, 3000);
    return tiempo;
    };

    var tiempo = intervalo();


    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function(){
        alert("Has comenzado el bucle de nuevo");
        intervalo();
    });

});

// importante usar evento load