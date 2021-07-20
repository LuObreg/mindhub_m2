//Ejercicio 3, se importa el ejercicio anterior luego de haber convertido la función a una promesa
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const tabla = require('./ejercicio4');
var multiplicando = argv.base;
tabla.printTabla(multiplicando);