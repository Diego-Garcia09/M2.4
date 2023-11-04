const express = require('express');
const router = express.Router();
const controladorProyecto = require('../controladores/controladorProyectos')

router.get("/", controladorProyecto.getAll);
router.get("/:id", controladorProyecto.getByRFC);

module.exports = router;