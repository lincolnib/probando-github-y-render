const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const mascotaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String
});

//Crear modelo + exportacion
const Mascota = mongoose.model('Mascota', mascotaSchema)// crear modelo
module.exports = Mascota; // esto q exportamos lo vamos a importar en Mascotas.js

//una base de datos puede tener multiples colecciones, para cada coleccion hay q hacer un schema. la base de datos en este caso es veterinaria, la coleccion vendria siendo mascotas


