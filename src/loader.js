const { Telegraf } = require('telegraf');
const config = require('./data/config.js');

const bot = new Telegraf(config.BOT_TOKEN);

module.exports = {
  bot
}