/* eslint-disable no-console */
require('dotenv').config();
const db = require('./models');

db.sequelize.sync({ force: true })
  .then(() => console.log('Migration success'))
  .catch(error => console.log(error))
  .finally(() => process.exit(0));
