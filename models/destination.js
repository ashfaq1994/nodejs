'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    name: DataTypes.STRING
  }, {});
  Destination.associate = function(models) {
    Destination.hasMany(models.Trip,{foreignKey: 'destination_id',as: 'trip'})
  };
  return Destination;
};