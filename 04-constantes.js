'use strict';

//Constantes
/*Una constante es un contenedor de datos, 
la diferencia es que estos datos no se pueden modificar
(Su valor no puede cambiar)*/ 

var web = "https://helicex.es";
const ip = "127.0.0.1";
console.log(web, ip) //valor https://helicex.es 127.0.0.1

/*Sin embargo si yo cambio de dominio y de ip, 
mi dominio podría modificarse y la ip no 
debido a que es una constante*/

var web= "https://localhost.com";

//ip = "567.5.4.2"; nos daría error de código. 