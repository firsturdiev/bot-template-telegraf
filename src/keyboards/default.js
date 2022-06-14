const { Markup } = require('telegraf');

const homeMenu = i18n => Markup.keyboard([
  [Markup.button.text(i18n.t('test'))]
]).resize();

module.exports = {
  homeMenu
};