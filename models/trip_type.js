'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip_Type = sequelize.define('Trip_Type', {
    name: DataTypes.STRING
  }, {});
  Trip_Type.associate = function(models) {
    Trip_Type.hasOne(models.Trip,{foreignKey: 'trip_type_id',as: 'trip'})
  };
  return Trip_Type;
};