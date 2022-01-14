const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const pendaftaran_pawat_jalan = koneksi.define('pendaftaran_pawat_jalan', {

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

module.exports = pendaftaran_pawat_jalan;