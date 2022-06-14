const { Telegraf, Scenes, session } = require('telegraf');
const config = require('./data/config.js');
const i18n = require('./utils/i18n.js');
const registrationScene = require('./scenes/registration.js');

// Bot

const bot = new Telegraf(config.BOT_TOKEN);

// Scenes

const stage = new Scenes.Stage([registrationScene]);

// Middlewares

bot.use(session());
bot.use(i18n.middleware());
bot.use(stage.middleware());

module.exports = {
  bot
}