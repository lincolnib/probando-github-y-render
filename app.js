// const frutero = require('./frutas.js') // asi importamos la informacion que hay en frutas.js

// frutero.forEach((item)=> {
//     console.log(item);
    
// } );

// const fruta = ['platano', 'manzana', 'platano', 'pera'];
// frutas.forEach((item)=> {
//     console.count(item);// count te muestra cuales elementos estan repetidos
    
// } );

            //////// Exportaciones ////////

const {frutas, dinero} = require('./frutas.js') 
frutas.forEach((item)=> {
    console.log(item);
    
} );

console.log(dinero);

                //  OJOOOOOOOOOOOOOOOOOOOOOOOOO //
//No es lo mismo exportar/importar archivos o partes de un archivo q exportar/importar rutas