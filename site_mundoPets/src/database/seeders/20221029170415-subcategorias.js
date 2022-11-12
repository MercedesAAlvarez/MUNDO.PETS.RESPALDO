'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('subcategorias', [], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('subcategorias', null, {});
     
  }
};
