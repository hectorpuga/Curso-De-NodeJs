
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta) => {

    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;

        }
        if (listar === true) {
            console.log('================================'.green);
            console.log(`Tabla del:`, colors.blue(base));
            console.log('================================'.green);

            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
        return `tabla-${base}.txt creado`.rainbow;
    } catch (error) {
        throw error;
    }


}

module.exports = { crearArchivo }