//Ejercicio 5
//Crear una loop for que muestre en consola la tabla del 5. Usar colors para agregar un título

var colors = require('colors');

const multiplicando = 5;
console.log('La tabla del 5'.rainbow); // rainbow
for(let i = 1; i < 11; i++){
    console.log (`${multiplicando} x ${i} = ${i * multiplicando}`);
}