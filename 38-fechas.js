
var fecha = new Date ();

var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}	
`;
console.log(textoHora);
// Math.random nos saca un número aleatorio,
// si queremos que sea un numero mayor lo podemos multiplicar
// podemos quitarle los decimales usando Math.ceil

console.log(Math.ceil(Math.random()*10000));