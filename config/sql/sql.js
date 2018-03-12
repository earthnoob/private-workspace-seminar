const Sequelize = require('sequelize');
const configDB = require('../database');

const { database, username, password, host, dialect } = configDB;

//console.log(configDB);
/*var sequelize = new Sequelize('students', 'root', null, {
  host: 'localhost',
  dialect: 'mysql', //Dialect needs to be explicitly given
  timezone: '+07:00' //Set the timezone
});*/

var sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect, //Dialect needs to be explicitly given
  timezone: '+07:00' //Set the timezone
});

module.exports = sequelize;
