const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
// const routerProyecto = require('./router/proyectos');
// const routerDonadores = require('./router/donadores');
// const routerDonatarios = require('./router/donatarios');
const app = express();
const port = 4000;

// app.use(cors());
// app.use(express.json());

// app.use('/proyectos', routerProyecto);
// app.use('/donadores', routerDonadores);
// app.use('/donatarios', routerDonatarios);

app.get('/', (req, res) => {
    res.send('Hola mundo!!!');
});

// https.createServer({
//     cert: fs.readFileSync('certificado.crt'),
//     key: fs.readFileSync('certificado.key')
// }, app).listen(port, function(){
//     console.log('Servidor escuchando por el puerto:', port);
// })

const llavePrivada = fs.readFileSync("server-key.pem");
const certificado = fs.readFileSync("server-cert.pem");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    // passphrase: "password"
};

const httpsServer = https.createServer(credenciales, app);

httpsServer.listen(port, () => {
    console.log('Servidor https escuchando por el puerto: '. port);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});
// app.listen(port, () => {
//     console.log('Servidor escuchando por el puerto:', port);
// }).on('error', err => {
//     console.log('Error al iniciar el servidor:', err);
// });