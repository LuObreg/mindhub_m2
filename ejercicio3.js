//Ejercicio 3, se importa el ejercicio anterior luego de haber convertido la función a una promesa
const tabla = require('./ejercicio4');
var multiplicando = process.argv[2].slice(-1);
tabla.printTabla(multiplicando);