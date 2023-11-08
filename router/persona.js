const express = require('express');
const router = express.Router();
const controladorPersona = require('../controladores/controladorPersona');

router.get("/", controladorPersona.getAll);
router.get("/:id", controladorPersona.getById);
router.get("/:id/proyectos", controladorPersona.getProyectos);
router.post("/", controladorPersona.createPersona);

module.exports = router;