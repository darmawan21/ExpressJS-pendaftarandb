const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const pasien = koneksi.define('pasien', {
  
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

module.exports = pasien;