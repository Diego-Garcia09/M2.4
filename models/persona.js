'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    static associate(models) {
      models.Persona.belongsToMany(models.Proyectos, {
        through: models.Donadores, 
        as: 'donadores', 
        foreignKey: 'personaId', 
        otherKey: 'proyectoId'
      });
      models.Persona.hasMany(models.Proyectos, {
        foreignKey: 'donatarioId',
        as: 'proyectosDonatario',
      });
    }
  }
  Persona.init({
    rfc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Persona',
    tableName: 'Persona',
  });
  return Persona;
};