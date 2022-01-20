var koneksi = require('../koneksi_poli');
const Sequelize = require('sequelize');

const abc = koneksi.define('poli',
  {
  	id: {
  		type: Sequelize.INTEGER,
  		allowNull: false,
  		primaryKey: true,
		  autoIncrement: true
  	},
  	nama: {
  		type: Sequelize.STRING,
  		allowNull: false
  	}
  },
  {
  	timestamps: true,
    freezeTableName: true
  }
);

module.exports = abc