'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('tarjetas', [], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('tarjetas', null, {});
     
  }
};
