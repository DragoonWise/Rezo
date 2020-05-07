'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        Login: 'testAdmin',
        Password : bcrypt.hashSync('azerty',bcrypt.genSaltSync(10)),
        IsAdmin : true
      },
      {
        Login: 'testUser',
        Password : bcrypt.hashSync('azerty',bcrypt.genSaltSync(10)),
        IsAdmin : false
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
