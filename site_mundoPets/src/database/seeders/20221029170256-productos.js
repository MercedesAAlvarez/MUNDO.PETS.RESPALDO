'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('productos', [], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('productos', null, {});
     
  }
};
