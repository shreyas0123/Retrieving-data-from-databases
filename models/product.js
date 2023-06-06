const Sequelize = require('sequelize');

const sequelize = require('../util/database'); //creating object

const Product = sequelize.define('product', {     //this is product model and 'product(basically product name i gave)
  id:{
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price:{
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  }
});

module.exports = Product;