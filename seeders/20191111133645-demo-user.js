'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName : 'John',
      lastName : 'Doe',
      company_id : 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'johnDoe@test.com'
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      first_name :'John'
    }])
  }
};