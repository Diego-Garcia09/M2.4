const proyectos = require('../persistencia/proyectos');

const getAll = async function(req, res) {
    let p = await proyectos.findAll();
    await res.json(p);
    console.log(p);
};

const getById = async function(req, res) {
    let p = await proyectos.findById(req.params.id);
    await res.json(p);
    console.log(p);
}

const crearProyecto = async function(req, res) {
    const nuevoProyecto = req.body;
    proyectos.addProyecto(nuevoProyecto);
    res.status(201).json(nuevoProyecto);
}

const eliminarProyecto = async function(req, res) {
    const id = req.params.id;
    proyectos.deleteProyecto(id);
    res.status(201).json(id);
}

const getDonadores = async function(req, res) {
    let p = await proyectos.leerDonadores(req.params.id);
    await res.json(p);
    console.log(p);
}

const getDonatarios = async function(req, res) {
    let p = await proyectos.leerDonatarios(req.params.id);
    await res.json(p);
    console.log(p);
}

const asignarDonadores = async function(req, res) {
    const idProyecto = req.params.idProyecto;
    const idPersona = req.params.idPersona;
    proyectos.agregarDonador(idProyecto, idPersona);
    res.status(201).json("Donador añadido exitosamente");
}

const asignarDonatario = async function(req, res) {
    const idProyecto = req.params.idProyecto;
    const idPersona = req.params.idPersona;
    proyectos.agregarDonatario(idProyecto, idPersona);
    res.status(201).json("Donatario añadido exitosamente");
}

exports.getAll = getAll;
exports.getById = getById;
exports.crearProyecto = crearProyecto;
exports.eliminarProyecto = eliminarProyecto;
exports.getDonadores = getDonadores;
exports.getDonatarios = getDonatarios;
exports.asignarDonadores = asignarDonadores;
exports.asignarDonatario = asignarDonatario;