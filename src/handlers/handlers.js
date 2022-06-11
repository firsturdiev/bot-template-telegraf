const { bot } = require('../loader.js')

function registerHandlers() {

  bot.start((ctx) => ctx.reply('Start'));
  bot.help((ctx) => ctx.reply('Help'));

}

module.exports = registerHandlers