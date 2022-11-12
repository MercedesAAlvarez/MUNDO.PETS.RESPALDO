'use strict';
let category = ['Gato Cachorro','Gato Adulto','Perro Cachorro','Perro Adulto']

let categorias = category.map(categoria => {
  let elemento = {
    nombre: categoria,
    /* createdAt:new Date,
    updatedAt:new Date  */
  }
  return elemento
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('categorias', categorias, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('categorias', null, {});
     
  }
};
