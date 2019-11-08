'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    company_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Company, {foreignKey: 'company_id',constraints: false})
  };
  return User;
};