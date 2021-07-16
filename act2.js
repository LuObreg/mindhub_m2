//Ejercicio 2
//Modificar el ejercicio anterior usando File System para grabar la tabla del 5 en un archivo .txt

const multiplicando = 5;
let result = "";
for(let i = 1; i < 11; i++){
    result += `${multiplicando} x ${i} = ${i * multiplicando} \n`;
}
console.log(result);

const fs = require('fs');

fs.writeFile('tabla5.txt', result, function (err) {
    if (err) return console.log(err);
  });
