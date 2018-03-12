const Sequelize = require('sequelize');
const configDB = require('../database');

//const { database, username, password, host, dialect } = configDB;
const { SMALLINT, STRING, DATE, NOW } = Sequelize;

//console.log(configDB);
var sequelize = new Sequelize('students', 'root', null, {
  host: 'localhost',
  dialect: 'mysql', //Dialect needs to be explicitly given
  timezone: '+07:00' //Set the timezone
});

//console.log(sequelize);

//Students model
var Students = sequelize.define('info', {
    id: {
        type: SMALLINT,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: STRING,
        allowNull: false
    },
    last_name: {
        type: STRING,
    },
    email: {
        type: STRING,
        unique: true,
        allowNull: false,
        validate: { 
            isEmail: {
                msg: "E-mail format is incorrect.",
            },
         },
    },
    gender: STRING,
    age: SMALLINT,
    address: STRING,
    faculty: STRING,
    date_added: {
        type: DATE,
        defaultValue: NOW
    }
},{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'info'
});

module.exports = Students;