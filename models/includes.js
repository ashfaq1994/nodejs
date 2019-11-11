'use strict';
module.exports = (sequelize, DataTypes) => {
  const Includes = sequelize.define('Includes', {
    check: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    trip_id: DataTypes.INTEGER
  }, {});
  Includes.associate = function(models) {
    // associations can be defined here
    Includes.belongsTo(models.Trip, {foreignKey: 'trip_id',constraints: false})

  };
  return Includes;
};