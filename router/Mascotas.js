const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')// Mascota tendra el poder de acceder a nuestra base de datos utilizando mongoose, mongoose tiene muchas funciones q sirven para agregar informacion, obtener datos, etc. para mas inf revisar el apartado de model de mongoosejs

router.get('/', async (req, res) => {

    try {
        const arrayMascotasDB  = await Mascota.find({})// de esta forma mongoose encuentra la coleccion de mascotas y toda su inf la almacena en arrayMascotasDB
        console.log(arrayMascotasDB);

          res.render("mascotas", {
        arrayMascotas: arrayMascotasDB
    })
        
    } catch (error) {
        console.log(error);
        
    }

    // res.render("mascotas", {
    //     arrayMascotas: [
    //         {id: 'kdjfih', nombre: 'rex', descripcion: 'descripcion rex'},
    //         {id: 'jjdhui', nombre: 'chanchan', descripcion: 'descripcion chanchan'}
    //     ]
    // })
})// para q se entienda: cuando estemos en la pagina de mascotas muestra el contenido q hay en /, luego es q mostraria el contenido restante de la forma mascotas/loQueSea, por ejemplo mascotas/moco. lo mismo pasa en el archivo RutasWeb, la diferencia es q rutas web accede a la pagina de inicio directamente y muestra el contenido q hay en / de forma inicial, y luego mostraria el de servicios, por si te pierdes fijate q en app4.js donde aparece un comentario q dice rutas web se accede a la ruta raiz apra mostrar como informacion inicial lo q contenga el / del archivo rutas web, por otro lado el comentario mascotas debajo tiene un /mascota q una vez q se acceda a el mostrara como informacion inicial loq contenga el / de Mascotas

// router.get('/moco', (req, res) => {
//     res.render("mascotas", {
//         arrayMascotas: [
//             {id: 'kdjfih', nombre: 'lin', descripcion: 'descripcion rex'},
//             {id: 'jjdhui', nombre: 'chanchan', descripcion: 'descripcion chanchan'}
//         ]
//     })
// })

module.exports = router;