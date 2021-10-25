const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const Pendaftaran_Rawat_Jalan = koneksi.define('Pendaftaran_Rawat_Jalan', {
  no_rm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_poli: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    freezeTableName: true
});

module.exports = Pendaftaran_Rawat_Jalan;