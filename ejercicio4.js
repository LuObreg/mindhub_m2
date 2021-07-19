//Ejercicio 4
const fs = require('fs');

var result = "";
function getTabla(multiplicando){

    for(let i = 1; i < 11; i++){
        result += `${multiplicando} x ${i} = ${i * multiplicando} \n`;
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



