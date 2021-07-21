//Ejercicio 2
//Modificar el ejercicio anterior usando File System para grabar la tabla del 5 en un archivo .txt
const fs = require("fs");

var result = "";
function getTabla(){
	const multiplicando = 5;

	for(let i = 1; i < 11; i++){
		result += `${multiplicando} x ${i} = ${i * multiplicando} \n`;
	}
	return Promise.resolve(result);
}

function printTabla(){
	getTabla()
		.then(
			fs.writeFile("tabla5.txt", result, function (err) {
				if (err) return console.log(err);
			})
		)
		.catch(console.log("No pudo realizarse la operación"));  
}

module.exports = { printTabla };
