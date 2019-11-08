'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email is required"
        }
      }
    },
    decription: DataTypes.STRING,
    model: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: "Numeric is required"
        }
      }
    },
    company_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Company, {foreignKey: 'company_id',constraints: false})
  };
  return Product;
};