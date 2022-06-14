require('dotenv').config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  BOT_CONFIG: {
    dropPendingUpdates: true
  },
  KNEX_CONFIG: {
    client: "postgresql",
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT
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