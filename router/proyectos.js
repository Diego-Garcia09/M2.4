const express = require('express');
const router = express.Router();
const controladorProyecto = require('../controladores/controladorProyectos');

router.get("/", controladorProyecto.getAll);
router.get("/:id", controladorProyecto.getById);
router.get("/:id/donadores", controladorProyecto.getDonadores);
router.get("/:id/donatarios", controladorProyecto.getDonatarios);
router.post("/", controladorProyecto.crearProyecto);
router.post("/:idProyecto/donadores/:idPersona", controladorProyecto.asignarDonadores);
router.post("/:idProyecto/donatario/:idPersona", controladorProyecto.asignarDonatario);
router.delete("/:id", controladorProyecto.eliminarProyecto);

module.exports = router;