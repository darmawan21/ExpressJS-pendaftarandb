const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi_poli.js");


const Poli = koneksi.define('Poli', {
  
  id: {
    type:Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  }, 
  {
    timestamps: true,
    freezeTableName: true
  }

);


module.exports = Poli;