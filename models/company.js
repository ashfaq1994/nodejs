'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasOne(models.User,{foreignKey: 'company_id',as: 'user'})
    Company.hasMany(models.Product,{foreignKey: 'company_id',as: 'product'})
  };
  return Company;
};