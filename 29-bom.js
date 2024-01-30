// BOM - Browser Object Model
function getBom() {
console.log(window.innerWidth);//ancho navegador
console.log(window.innerHeight);//alto navegador
console.log(screen.width);
console.log(screen.height);
// sacar la url actual en la que estamos 
console.log(window.location);
};
getBom();
// Para redirigir una url es necesario llamar en consola al método redirect
// Además de introducir la url ej: redirect("https//google.com")
// hemos cambiado el Href por otra url
function redirect(url){
    window.location.href = url;
};

// Ventana navegador
//Si ejecutamos el método abrirventana desde la consola 
// introducimos la url 
function abrirventana (url){
    window.open(url,"" ,"width=400, height=300");
};