const { Markup } = require('telegraf');

const homeMenu = i18n => Markup.keyboard([
  [Markup.button.text('test')]
]).resize();

module.exports = {
  homeMenu
};