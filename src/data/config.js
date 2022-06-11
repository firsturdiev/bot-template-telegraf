const dotenv = require('dotenv');
dotenv.config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  HELP_GROUP : process.env.HELP_GROUP,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  ADMINS: process.env.ADMINS.split(',').map(item => parseInt(item)),
};

module.exports = config;