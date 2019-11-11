'use strict';
module.exports = (sequelize, DataTypes) => {
  const Excludes = sequelize.define('Excludes', {
    check: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    trip_id: DataTypes.INTEGER
  }, {});
  Excludes.associate = function(models) {
    // associations can be defined here
    Excludes.belongsTo(models.Trip, {foreignKey: 'trip_id'})

  };
  return Excludes;
};