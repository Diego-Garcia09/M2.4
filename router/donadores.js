const express = require('express');
const router = express.Router();
const controladorDonadores = require('../controladores/controladorDonadores');

router.get("/", controladorDonadores.getAll);
router.get("/:id/persona", controladorDonadores.getByPersonaId);
router.get("/:id/proyecto", controladorDonadores.getByProyectoId);

module.exports = router;