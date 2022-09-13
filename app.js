// const { argv, options } = require('yargs');
const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption: true,
                describe:'Es la base de la tabla de multiplicar'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default: 10,
                describe:'indica cuantos valores de la tabla se deben calcular por defecto 10'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default: false,
                describe:'Muestra la tabla en pantalla '
            })
            .check( ( argv,options )=> {
                if ( isNaN(argv.b) ){
                    throw 'La base debe ser un número'
                }
                return true
            })
            .argv;

console.clear();
// console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b)
// const base = 3;

crearArchivo (argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'.bold.green))
    .catch(err => console.log(err.red));
