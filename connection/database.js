const Sequelize = require('sequelize');

const sequelize = new Sequelize('DBNAME', 'USERNAME', 'PASSWORD', {
  dialect: 'mssql',
  host: 'localhost',
  dialectOptions:{
	  encrypt:true
  }
});

module.exports = sequelize;
