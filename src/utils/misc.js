const { bot } = require('../loader.js');

async function setBotCommands() {
  await bot.telegram.setMyCommands([
    { command: 'start', description: '🔄 Botni qayta ishga tushirish | 🔄 Перезапустите бота' },
    { command: 'lang', description: '🇺🇿 Tilni o\'zgartirish | 🇷🇺 Изменить язык'}
  ])
}

function logStartup() {
  bot.telegram.getMe().then(bot => {
    console.log(`\x1b[33mBot is running on @${bot.username}\x1b[0m`);
  });
}

module.exports = {
  setBotCommands,
  logStartup
}