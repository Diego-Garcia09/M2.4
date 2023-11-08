const personas = require('../persistencia/persona');

const getAll = async function(req, res) {
    let p = await personas.findAll();
    await res.json(p);
    console.log(p);
}

const getById = async function(req, res) {
    let p = await personas.findById(req.params.id);
    await res.json(p);
    console.log(p);
}

const getProyectos = async function(req, res) {
    let p = await personas.leerProyectos(req.params.id);
    await res.json(p);
    console.log(p);
}

const createPersona = async function(req, res) {
    const nuevaPersona = req.body;
    personas.addPersona(nuevaPersona);
    res.status(201).json(nuevaPersona);
}

exports.getAll = getAll;
exports.getById = getById;
exports.getProyectos = getProyectos;
exports.createPersona = createPersona;