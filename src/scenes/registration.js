const { Scenes } = require('telegraf');
const inlineKeyboards = require('../keyboards/inline.js');
const defaultKeyboards = require('../keyboards/default.js');
const db = require('../utils/db.js');

const registrationScene = new Scenes.WizardScene(
  'REGISTRATION',
  async (ctx) => {
    await ctx.reply(ctx.i18n.t('language.title'), inlineKeyboards.languageMenu);
    return ctx.wizard.next();
  },
  async (ctx) => {
    try {
      const lang = ctx.callbackQuery.data.split(':')[1];
      const user = { telegram_id: ctx.from.id, full_name: `${ctx.from.first_name} ${ctx.from.last_name || ''}`, lang }
      ctx.i18n.locale(user.lang);
      await db.addUser(user);

      await ctx.answerCbQuery(ctx.i18n.t('language.success'));
      await ctx.deleteMessage();
      await ctx.reply(ctx.i18n.t('welcome'), defaultKeyboards.homeMenu(ctx.i18n));
      return ctx.scene.leave();
    }
    catch (err) {
      await ctx.reply(ctx.i18n.t('language.title'), inlineKeyboards.languageMenu);
    }
  }
);

module.exports = registrationScene;