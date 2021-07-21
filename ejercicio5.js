//Ejercicio 5
//Crear una loop for que muestre en consola la tabla del 5. Usar colors para agregar un título

var colors = require('colors');

const multiplicando = 5;

colors.setTheme({
    content: ['blue', 'bgWhite', 'bold'],
    title: ['white', 'bgMagenta', 'bold'],
    spechar: ['magenta', 'bgWhite', 'bold']

  });

console.log(' ======*****====== \n  La tabla del 5   \n ======*****======  '.title); // rainbow
for(let i = 1; i < 11; i++){
    console.log (`  ♦   ${multiplicando}`.content + ' x '.spechar + `${i}`.content + " = ".spechar + `${i * multiplicando}`.content + "   ♦  ".spechar);
}