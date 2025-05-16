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

router.get('/crear', (req, res) => {
    res.render('crear')
});

router.post('/', async (req, res) => {
    const body = req.body;// al recibir estos datos del formulario tenemos q almacenarlos(guardarlos) en la base de datos, existen 2 metodos para hacerlo, para ello haremos un try catch

    // console.log(body);

    //metodo #1
    // try {
    //      const mascotaDB = new Mascota(body)// creamos una nueva mascota con los datos del formulario q se guardaron en la constante body, esa mascota se creo siguiendo el modelo de mascota.js.
    //     await mascotaDB.save()// almacenamos esa mascota en mongodb
    //     // console.log("Mascota creada: ", mascotaDB);
    //     res.redirect('/mascotas')// esto va a empujar a esa mascota creada a la ruta q nosotros queramos. En este caso al irnos a la ruta /mascotas (q se encuentra en app4.js en el comentario rutas web) llamaremos al archivo Mascotas.js, el cual llamara al modelo mascota.js, como almacenamos esta nueva mascota en la base de datos de mongodb entonces al usar el metodo find() automaticamente pintara todas las mascotas q hayan, incluyendo la q se acabo de crear pq ya forma parte de la base de datos.
        
    // } catch (error) {
    //     console.log(error);
        
    // }

    //metodo #2 (mas corto)
     try {
        await Mascota.create(body)// crea y almacena la mascota en la base de datos
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }

})

router.get('/:id', async(req, res) => {// tenemos q leer una ruta dinamica, en este caso seria /mascota/el id de la mascota, para q sea dinamica ponemos /:id
    const id = req.params.id// el .id tiene q coincidir con el nombre q se puso despues de los dos : en el get. De esta forma se almacena en id el id de la mascota a la q se le hizo click
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })// se pone _id pq en la base de datos el id viene con ese guion bajo, de esa forma encontraremos la primera mascota que tenga ese id y tomaremos toda su informacion
        console.log(mascotaDB)
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log('erroooooooooorrr', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra la mascota...'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {

        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });// elimina la mascota
        console.log(mascotaDB)

        if (!mascotaDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false });
        console.log(mascotaDB);
        res.json({
            estado: true,
            mensaje: 'Mascota editada'
        })
    } catch (error) {
        console.log(error);

         res.json({
            estado: false,
            mensaje: 'No se pudo editar la mascota'
        })
        
    }
})

module.exports = router;