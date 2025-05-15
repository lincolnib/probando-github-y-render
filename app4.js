const express = require('express');
const app = express();

require('dotenv').config()
 
const port = process.env.PORT;// para acceder a las variables de entorno se usa process.env.nombreDeLaVariableDeEntorno

//Conexion a base de datos
const mongoose = require('mongoose');

// variables de entorno
// const usuario = "youtube_vet"
// const password = "t8qXCXFF8X1LUYrZ"
// const dbName = "veterinaria"

// const uri = `mongodb+srv://${usuario}:${password}@cluster0.zdczkue.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0` // esta es la uri normal, abajo veremos la uri cuando se usan las variables de entorno en .env

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.zdczkue.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('conectado a mongodb')) 
    .catch(e => console.log('error de conexión', e))

//motor de plantillas
app.set('view engine', 'ejs');//con todo esto le estamos diciendo a express q vamos a utilizar un motor de plantillas q se llama ejs
app.set('views', __dirname + '/views')// y esas plantillas van a estar en la carpeta views

app.use(express.static(__dirname + '/publicc'))

// app.get('/', (req, res) => {
//     res.render('index', {titulo: 'mi titulo dinamico'});// estos objetos podrian venir desde una base de datos
// })

// app.get('/servicios', (req, res) => {
//     res.render('servicios', {tituloServicios: 'Este es un mensaje dinamico de servicios'});
// }) // estos dos app.get se sustituye por lo de abajo:

//Rutas web
app.use('/', require('./router/RutasWeb'))

//Mascotas
app.use('/mascotas', require('./router/Mascotas'))

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: '404',
        descripcion: 'titulo del sitio web'
    })
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto ', port);
    
})
//es importante la carpeta estatica public ya q ahi se va a almacenar el css y js, el cual no se almacena en views, en views solo van archivos ejs
