//Ejercicio 3, se importa el ejercicio anterior luego de haber convertido la función a una promesa
const tabla = require('./ejercicio4');

const argv = require('yargs')
                .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true
            })
                .check((argv) => {
                    if (argv.b < 1 || argv.b > 20){
                        throw new Error("Debes colocar un valor de base entre 1 y 20");
                    }
                    else{
                        return true
                    }
                })
            .argv;
console.clear();
console.log(argv);
console.log('base: yargs', argv.b)

var multiplicando = argv.b;
tabla.printTabla(multiplicando);