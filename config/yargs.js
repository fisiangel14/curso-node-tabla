const { isModuleNamespaceObject } = require('util/types');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de mulpltiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 50,
        describe: 'Es el limite de la tabla de mulpltiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;