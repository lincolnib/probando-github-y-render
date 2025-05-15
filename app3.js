//express: nos permite hacer nuestro servidor http de una manera sencilla, tambien vamos a poder gestionar las respuestas o las solicitudes q hace el cliente

const express = require('express');
const app = express();

const port = 3000;
//Asi se responden solicitudes que hace el cliente, el cliente hace una solicitud a la pagina tal y le enviamos una respuesta, podemos responder con un json, con archivos estaticos, etc.
// En otras palabras asi se accede a las rutas de la pagina
app.get('/', (req, res) => {    
    res.send('Mi respuesta desde express v2');
})

app.get('/servicios', (req, res) => {
    res.send('Estas en la pagina de servicio');
})
//Archivos estaticos: para el servicio de archivos estaticos como imagenes,archivos css, archivos js, utilice la funcion middleware incorporado express.static de Express.
//  vamos a crear una carpeta  llamada public, a la cual el cliente va a tener acceso en general, dentro de ella colocan todo a lo que el cliente podria acceder(archivos estaticos)

//ahora: cuando nosotros llamamos a este static, tenemos que especificar la ruta donde va a estar nuestra carpetita, _dirname crea una ruta dinamica, y a esa ruta dinamica le anadimos la carpeta q queremos, en este caso public.
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto ', port);
    
})

// Las rutas estaticas van dentro de la carpeta public, las rutas dinamicas van dentro de la carpeta vistas