'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direcciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Direcciones.belongsTo(models.Usuarios,{
        as: 'direccionesUsuarios',
        foreignKey: 'usuarios_id'
      })
    }
  }
  Direcciones.init({
    ciudad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    cod_postal: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    calle: DataTypes.STRING,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Direcciones',
    timestamps: true
  });
  return Direcciones;
};