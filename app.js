const { crearFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// const base = 10;

crearFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(nameFile.zebra, 'creado'))
    .catch(err => console.log(err));




