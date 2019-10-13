'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
  //  Employee.belongsTo(models.Company,{
  //    foreignKey : 'CompanyId',
  //    onDelete : 'CASCADE',
  //  })
  };
  return Employee;
};