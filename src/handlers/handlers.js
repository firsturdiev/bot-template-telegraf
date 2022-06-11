const { bot } = require('../loader.js');
const db = require('../utils/db.js');

function registerHandlers() {

  bot.start(async (ctx) => {
		const isRegistred = await db.isRegistred(ctx.from.id);
    if (!isRegistred)
			await db.addUser({telegram_id: ctx.from.id, full_name: ctx.from.first_name});
			
    if (!ctx.session.lang)
      return ctx.scene.enter('LANGUAGE');

    return ctx.reply(ctx.i18n.t('welcome'));
  });

  bot.command('lang', (ctx) => {
    return ctx.scene.enter('LANGUAGE');
  })
}

module.exports = registerHandlers