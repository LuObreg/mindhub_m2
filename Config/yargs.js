
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Es el número del cual calcularemos su tabla de multiplicar"
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
module.exports = { argv };
