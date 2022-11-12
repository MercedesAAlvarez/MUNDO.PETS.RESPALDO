'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('carritos', [], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('carritos', null, {});
     
  }
};
