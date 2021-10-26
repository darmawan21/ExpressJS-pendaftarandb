const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const Pasien = koneksi.define('Pasien', {
  
  no_rm: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false
  },

  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  no_telp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
    freezeTableName: true
});

module.exports = Pasien;