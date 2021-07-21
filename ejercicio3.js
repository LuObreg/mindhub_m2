//Ejercicio 3, se importa el ejercicio anterior luego de haber convertido la función a una promesa
const tabla = require("./ejercicio4");
const argv = require("./Config/yargs");

const base = argv.argv.b;
console.clear();
console.log(argv.argv);
console.log("base: yargs", base);

var multiplicando = base;
tabla.printTabla(multiplicando);