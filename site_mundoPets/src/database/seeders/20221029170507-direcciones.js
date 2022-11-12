'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('direcciones', [], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('direcciones', null, {});
     
  }
};
