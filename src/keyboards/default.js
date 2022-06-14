const { Markup } = require('telegraf');

const homeMenu = i18n => Markup.keyboard([
  [Markup.button.text(i81n.t('test'))]
]).resize();

module.exports = {
  homeMenu
};