const models = require('../models');

const findAll = async () => {
    proyectos = await models.Proyectos.findAll();
    return proyectos;
}

const findById = async (ide) => {
    proyectos = await models.Proyectos.findAll({
        where: {
            id: ide
        }
    });
    return proyectos;
}

const addProyecto = async (nuevoProyecto) => {
    const proyecto = await models.Proyectos.create(nuevoProyecto);
    await proyecto.save();
}

const deleteProyecto = async (ide) => {
    await models.Proyectos.destroy({
        where: {
            id: ide
        }
    });
}

const agregarDonador = async (idProyecto, idPersona) => {
    const prop = await models.Proyectos.findByPk(idProyecto);
    const persona = await models.Persona.findByPk(idPersona);
    await prop.addDonadores(persona);
}

const agregarDonatario = async (idProyecto, idPersona) => {
    const prop = await models.Proyectos.findByPk(idProyecto);
    const persona = await models.Persona.findByPk(idPersona);
    prop.donatarioId = persona.id;
    await prop.save();
}

const leerDonadores = async (idProyecto) => {
    const proyecto = await models.Proyectos.findByPk(idProyecto);
    const donadores = await models.Donadores.findAll({
        where: {
            proyectoId: proyecto.id
        }
    })
    return donadores;
}

const leerDonatarios = async (idProyecto) => {
    const proyecto = await models.Proyectos.findByPk(idProyecto);
    const donatario = await models.Persona.findByPk(proyecto.donatarioId);
    return donatario;
}

exports.findAll = findAll;
exports.findById = findById;
exports.addProyecto = addProyecto;
exports.deleteProyecto = deleteProyecto;
exports.agregarDonador = agregarDonador;
exports.agregarDonatario = agregarDonatario;
exports.leerDonadores = leerDonadores;
exports.leerDonatarios = leerDonatarios;