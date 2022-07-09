const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 50) => {

    try {
        let salida = '';
        let consola = '';



        for (i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('===================================');
            console.log('====     Tabla del:', base);
            console.log('===================================');
            console.log(consola);
        }
        // este metoeo hay q atraparlo en 
        // try catch para ver el error
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


        return `tabla-${base}.txt creada!!`;

    } catch (err) {
        throw err;
    }





}

module.exports = {
    crearFile: crearArchivo
}