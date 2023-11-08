const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const models = require('./models');
const routerProyecto = require('./router/proyectos');
const routerPersona = require('./router/persona');
const routerDonadores = require('./router/donadores');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/proyectos', routerProyecto);
app.use('/personas', routerPersona);
app.use('/donadores', routerDonadores);

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

const llavePrivada = fs.readFileSync("server-key.pem");
const certificado = fs.readFileSync("server-cert.pem");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
};

const httpsServer = https.createServer(credenciales, app);

httpsServer.listen(port, () => {
    console.log('Servidor https escuchando por el puerto: '. port);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});