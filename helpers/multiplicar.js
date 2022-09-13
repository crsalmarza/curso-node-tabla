const fs = require('fs');
var colors = require('colors');
const { isModuleNamespaceObject } = require('util/types');

const crearArchivo = async( base = 5 , listar = false, hasta=10 ) => {
    try {
        
    
        let salida = ''; 
        for (let i = 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    if (listar) {
        console.log('=================='.green);
        console.log('  tabla del: '.blue, base );
        console.log('=================='.green);
        console.log(salida.rainbow);
    }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        //console.log(`tabla-${base}.txt creada`); 
        return  `tabla-${base}.txt`.bold.red;  
    } catch (err) {
        return err;
    }
   
}

module.exports ={
    crearArchivo
}