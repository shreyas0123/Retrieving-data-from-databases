const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-completes','root','root123',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports = sequelize;