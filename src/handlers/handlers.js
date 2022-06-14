const { match } = require('telegraf-i18n');
const { bot } = require('../loader.js');
const db = require('../utils/db.js');
const { homeMenu } = require('../keyboards/default.js');
const { languageMenu } = require('../keyboards/inline.js');

function registerHandlers() {

  bot.start(async (ctx) => {
    if (!ctx.session.user) {
      ctx.session.user = await db.getUser(ctx.from.id);
      ctx.i18n.locale(ctx.session.user?.lang);
    }

    if (!ctx.session.user?.lang)
      return ctx.scene.enter('REGISTRATION');

    return ctx.reply(ctx.i18n.t('welcome'), homeMenu(ctx.i18n));
  });

  bot.command('lang', (ctx) => {
    return ctx.reply(ctx.i18n.t('language.title'), languageMenu);
  })

  bot.action(/^language:(.+)$/, async (ctx) => {
    const lang = ctx.match[1];
    ctx.session.user.lang = lang;
    ctx.i18n.locale(lang);
    await db.updateUser(ctx.from.id, { lang });
    await ctx.answerCbQuery(ctx.i18n.t('languageChosen'));
    return ctx.reply(ctx.i18n.t('welcome'), homeMenu(ctx.i18n));
  })
}

module.exports = registerHandlers