const Sequelize = require('sequelize');
const sequelize = require('../sql/sql');

const { SMALLINT, STRING, BOOLEAN, DATE, NOW } = Sequelize;

//console.log(sequelize);

var Account = sequelize.define('accounts', {
    email: {
        type: STRING,
        primaryKey: true,
        allowNull: false,
        validate: { 
            isEmail: {
                msg: "E-mail format is incorrect.",
            },
        },
    },
    username: {
        type: STRING,
        unique: true,
    },
    password: STRING,
    role: STRING,
    last_login: {
        type: DATE,
        defaultValue: NOW
    },
    active: BOOLEAN,
},{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'accounts',
});

module.exports = Account;