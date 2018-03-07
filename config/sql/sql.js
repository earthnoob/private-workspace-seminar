const requires = {
    database: "students",
    username: "root",
    password: "",
    host: "localhost",
    dialect: "mysql"
};

const { database, username, password, host, dialect } = requires;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});
