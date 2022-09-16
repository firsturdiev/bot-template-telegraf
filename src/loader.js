const { Telegraf, Scenes, session } = require('telegraf');
const config = require('./data/config.js');
const i18n = require('./utils/i18n.js');
const db = require('./utils/db.js');
const registrationScene = require('./scenes/registration.js');
const supportScene = require('./scenes/support.js');

// Bot

const bot = new Telegraf(config.BOT_TOKEN);

// Scenes

const stage = new Scenes.Stage([registrationScene, supportScene]);

// Middlewares

bot.use(session());
bot.use(i18n.middleware());
bot.use(stage.middleware());
bot.use(async (ctx, next) => {
  if (ctx.chat.type == 'private') {
    ctx.session.user = await db.getUser(ctx.chat.id);
    if (!ctx.session.user)
      return ctx.scene.enter('REGISTRATION');
  }

  return next();
})

module.exports = {
  bot
};