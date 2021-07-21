//Ejercicio 4
const fs = require('fs');
var colors = require('colors');


var result = "";
function getTabla(multiplicando){

    for(let i = 1; i < 11; i++){
        result += `${multiplicando} x ${i} = ${i * multiplicando} \n`;
    }
    colors.setTheme({
        content: ['blue', 'bgWhite', 'bold'],
        title: ['white', 'bgMagenta', 'bold'],
        spechar: ['magenta', 'bgWhite', 'bold']
    
      });
    
    console.log(' ======*****====== \n  La tabla del ' + multiplicando + '   \n ======*****======  '.title); // rainbow
    for(let i = 1; i < 11; i++){
        console.log (`  ♦   ${multiplicando}`.content + ' x '.spechar + `${i}`.content + " = ".spechar + `${i * multiplicando}`.content + "   ♦  ".spechar);
    }
    return Promise.resolve(result);
}

function printTabla(multiplicando){
    getTabla(multiplicando)
        .then(
            fs.writeFile(`tabla${multiplicando}.txt`, result, function (err) {
                if (err) return console.error("No pudo realizarse la operación");
            })
        )
}

module.exports = { printTabla };



