require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'apa_hayo',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_ENGINE || 'mysql',
    port: process.env.DB_PORT || 3306,
    operatorAliases: false,
    pool: {
      min: 0,
      max: 5,
      idle: 20000,
      handleDisconnects: true,
    },
    logging: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'apa_hayoo',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_ENGINE || 'mysql',
    port: process.env.DB_PORT || 3306,
    operatorAliases: false,
    pool: {
      min: 0,
      max: 5,
      idle: 20000,
      handleDisconnects: true,
    },
    logging: false,
  }
};
