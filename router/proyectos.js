const express = require('express');
const router = express.Router();
const controladorProyecto = require('../controladores/controladorProyectos')

router.get("/", controladorProyecto.getAll);

module.exports = router;