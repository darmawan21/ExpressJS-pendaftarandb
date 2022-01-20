const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const pendaftaran_Rawat_jalan = koneksi.define('pendaftaran_rawat_jalan', {

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

module.exports = pendaftaran_Rawat_jalan;