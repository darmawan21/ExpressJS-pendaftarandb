const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const Pendaftaran_Rawat_Jalan = koneksi.define('Pendaftaran_Rawat_Jalan', {

  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  no_rm: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_poli: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = Pendaftaran_Rawat_Jalan;