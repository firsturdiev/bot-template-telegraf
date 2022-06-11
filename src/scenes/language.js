// const { Scenes } = require('telegraf');
// const { languageMenu } = require('../keyboards/inline.js')
// const { homeMenu } = require('../keyboards/default.js')
// const db = require('../utils/db.js')

// const languageScene = new Scenes.WizardScene(
//   'LANGUAGE',
//   async (ctx) => {
//     await ctx.reply('Iltimos, tilni tanlang | Пожалуйста, выберите язык', languageMenu);
//     return ctx.wizard.next();
//   },
//   async (ctx) => {
//     if (ctx.updateType !== 'callback_query')
//       return ctx.scene.leave();

//     const langCode = ctx.callbackQuery.data.split(':')[1];  
//     ctx.session.lang = langCode;
//     ctx.i18n.locale(langCode);
//     await db.updateUser(ctx.from.id, { lang: langCode });
//     await ctx.answerCbQuery(ctx.i18n.t('language'));
//     await ctx.deleteMessage(ctx.callbackQuery.message.message_id);

//     const isUserRegistered = await db.isRegistered(ctx.from.id);
//     if (!isUserRegistered) 
//       return ctx.scene.enter('REGISTRATION');
//     await ctx.reply(ctx.i18n.t('welcome'), homeMenu(ctx.i18n));
    
//     return ctx.scene.leave();
//   }
// );

// module.exports = languageScene