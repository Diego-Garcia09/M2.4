'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Persona', [{
      rfc: 1,
      name: 'Diego',
      imagen: 'diego.jpg'
    },
    {
      rfc: 2,
      name: 'Anna',
      imagen: 'anna.jpg',
    },
    {
      rfc: 3,
      name: 'Alejandro',
      imagen: 'ale.jpg',
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Persona', {}, {});
  }
};
