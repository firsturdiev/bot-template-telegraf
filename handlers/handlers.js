import { bot } from '../loader.js';

function registerHandlers() {

  bot.start((ctx) => ctx.reply('Start'));
  bot.help((ctx) => ctx.reply('Help'));

}

export default registerHandlers