const models = require('../models');

const findAll = async () => {
    personas = await models.Persona.findAll();
    return personas;
}

const findById = async (ide) => {
    personas = await models.Persona.findAll({
        where: {
            id: ide
        }
    });
    return personas;
}

const addPersona = async (nuevaPersona) => {
    const persona = await models.Persona.create(nuevaPersona);
    await persona.save();
}

const leerProyectos = async (id) => {
    const persona = await models.Persona.findByPk(id);
    const donadores = await models.Donadores.findByPk(persona.id);
    return donadores;
}

exports.findAll = findAll;
exports.findById = findById;
exports.leerProyectos = leerProyectos;
exports.addPersona = addPersona;