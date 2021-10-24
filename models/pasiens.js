const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const Pasien = koneksi.define('Pasien', {
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