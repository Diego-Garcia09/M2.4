const models = require('../models');

const findAll = async () => {
    donadores = await models.Donadores.findAll();
    return donadores;
}

const findByPersonaId = async (ide) => {
    donadores = await models.Donadores.findAll({
        where: {
            personaId: ide
        }
    });
    return donadores;
}

const findByProyectoId = async (ide) => {
    donadores = await models.Donadores.findAll({
        where: {
            proyectoId: ide
        }
    });
    return donadores;
}

exports.findAll = findAll;
exports.findByPersonaId = findByPersonaId;
exports.findByProyectoId = findByProyectoId;