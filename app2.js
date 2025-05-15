const http = require('http');
const server = http.createServer((req, res) => {
    res.end('estoy respondiendo tu solicitud v3')
}) //para que esto funcione tenemos que configurar un puerto, abajo lo configuro
//respecto a req y res, para que quede claro: el cliente requiere(req) acceder a una parte del sitio web, y nosotros respondemos(res)
const puerto = 3000;

server.listen(puerto, () => {
    console.log('Escuchando solicitudes');
})
// si escribimos cls en la terminal limpiamos la consola

// si vas a tu navegador y escribes localhost:3000 veras en la pagina web estoy respondiendo tu solicitud, el server.listen esta a la eschucha de lo q ocurre en el puerto 3000, y lo q ocurra en el puerto 3000 se mostrara, y lo q se mostro fue lo q acabe de decir.

//ahora q pasa si pongo: estoy respondiendo tu solicitud v2? no se va a mostar en el citio web, primero hay que reiniciar el servidor escribiendo nuevamente node app2, y despues refrescar la pagina. Lo cual es totalmente ineficiente, para ello se invento nodemon q hace eso automaticamente, para usar nodemon hay q instalar ee paquetito