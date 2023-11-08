const donadores = require('../persistencia/donadores');

const getAll = async function(req, res) {
    let d = await donadores.findAll();
    await res.json(d);
    console.log(d);
};

const getByPersonaId = async function(req, res) {
    let d = await donadores.findByPersonaId(req.params.id);
    await res.json(d);
    console.log(d);
}

const getByProyectoId = async function(req, res) {
    let d = await donadores.findByProyectoId(req.params.id);
    await res.json(d);
    console.log(d);
}

exports.getAll = getAll;
exports.getByPersonaId = getByPersonaId;
exports.getByProyectoId = getByProyectoId;