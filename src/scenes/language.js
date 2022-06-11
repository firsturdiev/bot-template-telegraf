const { Scenes } = require('telegraf');
const { languageMenu } = require('../keyboards/inline.js')
const db = require('../utils/db.js')

const languageScene = new Scenes.WizardScene(
  'LANGUAGE',
  async (ctx) => {
    await ctx.reply('Iltimos, tilni tanlang | Пожалуйста, выберите язык', languageMenu);
    return ctx.wizard.next();
  },
  async (ctx) => {
    if (ctx.updateType !== 'callback_query')
      return ctx.scene.back();

    const langCode = ctx.callbackQuery.data.split(':')[1];  
    ctx.session.lang = langCode;
    ctx.i18n.locale(langCode);
    await ctx.answerCbQuery(ctx.i18n.t('languageChosen'));
    await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
    await ctx.reply(ctx.i18n.t('welcome'));
    return ctx.scene.leave();
  }
);

module.exports = languageScene