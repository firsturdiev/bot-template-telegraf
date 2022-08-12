const { match } = require('telegraf-i18n');
const { bot } = require('../loader.js');
const db = require('../utils/db.js');
const defaultKeyboards = require('../keyboards/default.js');
const inlineKeyboards = require('../keyboards/inline.js');

function registerHandlers() {

  // Starter

  bot.start(async (ctx) => {
    if (!ctx.session.user) {
      ctx.session.user = await db.getUser(ctx.from.id);
      ctx.i18n.locale(ctx.session.user?.lang);
    }

    if (!ctx.session.user?.lang)
      return ctx.scene.enter('REGISTRATION');

    return ctx.reply(ctx.i18n.t('welcome'), defaultKeyboards.homeMenu(ctx.i18n));
  });

  bot.command('lang', (ctx) => {
    return ctx.reply(ctx.i18n.t('language.title'), inlineKeyboards.languageMenu);
  })

  bot.action(/^language:(.+)$/, async (ctx) => {
    const lang = ctx.match[1];
    ctx.session.user.lang = lang;
    ctx.i18n.locale(lang);
    await db.updateUser(ctx.from.id, { lang });
    await ctx.answerCbQuery(ctx.i18n.t('language.success'));
    await ctx.deleteMessage();
    return ctx.reply(ctx.i18n.t('welcome'), defaultKeyboards.homeMenu(ctx.i18n));
  })

}

module.exports = registerHandlers