import { Telegraf } from 'telegraf';
import config from './data/config.js';
import registerHandlers from './handlers/handlers.js';

const bot = new Telegraf(config.BOT_TOKEN);
registerHandlers();

export {
  bot
}