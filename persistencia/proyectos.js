const models = require('../models');

const findAll = async () => {
    proyectos = await models.Proyectos.findAll();
    return proyectos;
}

exports.findAll = findAll;