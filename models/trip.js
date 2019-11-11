'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    title: DataTypes.STRING,
    from_date: DataTypes.DATE,
    to_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    departure: DataTypes.STRING,
    departure_time: DataTypes.DATE,
    location: DataTypes.STRING,
    image: DataTypes.JSON,
    video: DataTypes.STRING,
    slug: DataTypes.STRING,
    featured: DataTypes.BOOLEAN,
    price: DataTypes.DOUBLE
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
    Trip.hasMany(models.Excludes,{foreignKey: 'trip_id',as: 'excludes'})
    Trip.hasMany(models.Includes,{foreignKey: 'trip_id',as: 'includes'})
    Trip.belongsTo(models.Trip_Type, {foreignKey: 'trip_type_id'})
    Trip.belongsTo(models.Destination, {foreignKey: 'destination_id'})

  };
  return Trip;
};