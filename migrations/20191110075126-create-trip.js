'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      from_date: {
        type: Sequelize.DATE
      },
      to_date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      departure: {
        type: Sequelize.STRING
      },
      departure_time: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.JSON
      },
      video: {
        type: Sequelize.STRING
      },
      featured: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.DOUBLE
      },
      slug: {
        type: Sequelize.STRING
      },
      trip_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {         // User belongsTo Company 1:n
          model: 'trip_types',
          key: 'id'
        }
      },
      destination_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {         // User belongsTo Company 1:n
          model: 'destinations',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};