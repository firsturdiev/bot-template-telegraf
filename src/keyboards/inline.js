const { Markup } = require('telegraf');
const db = require('../utils/db.js');

const languageMenu = Markup.inlineKeyboard([
  [Markup.button.callback('🇺🇿 O\'zbekcha', 'language:uz'), Markup.button.callback('🇷🇺 Русский', 'language:ru')]
]);

module.exports = {
  languageMenu
}