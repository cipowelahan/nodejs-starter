/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');

const now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('User', [{
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('secret', bcrypt.genSaltSync(2)),
    createdAt: now,
    updatedAt: now,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}),
};
