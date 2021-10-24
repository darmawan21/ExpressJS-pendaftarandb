const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const PendaftaranRawatJalan = koneksi.define('PendaftaranRawatJalan', {
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

module.exports = PendaftaranRawatJalan;