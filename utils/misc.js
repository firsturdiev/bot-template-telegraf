import { bot } from '../loader.js';

async function setBotCommands() {
  await bot.telegram.setMyCommands([
    { command: 'start', description: 'Botni qayta ishga tushirish' }
  ])
}

function logStartup() {
  bot.telegram.getMe().then(bot => {
    console.log(`\x1b[33mBot is running on @${bot.username}\x1b[0m`);
  });
}

export {
  setBotCommands,
  logStartup
}