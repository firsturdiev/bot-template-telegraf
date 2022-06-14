require('dotenv').config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  BOT_CONFIG: {
    dropPendingUpdates: true
  },
  KNEX_CONFIG: {
    client: "postgresql",
    connection: {
      host: config.DATABASE_HOST,
      user: config.DATABASE_USER,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE_NAME,
      port: config.DATABASE_PORT
    }
  },
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  ADMINS: process.env.ADMINS.split(',').map(item => Number(item)),
};

module.exports = config;