const Sequelize = require('sequelize');
const sequelize = require('../sql/sql');

const { SMALLINT, STRING, DATE, NOW } = Sequelize;

//console.log(sequelize);

var Student = sequelize.define('info', {
    id: {
        type: SMALLINT,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: STRING,
        allowNull: false,
    },
    last_name: {
        type: STRING,
        allowNull: false,
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
        defaultValue: NOW,
    }
},{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'info',
});

module.exports = Student;