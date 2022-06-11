const { bot } = require('./loader.js');
const i18n = require('./utils/i18n.js');
const { Scenes, session } = require('telegraf');

const { setBotCommands, logStartup } = require('./utils/misc.js');
const registerHandlers = require('./handlers/handlers.js');
const { createTables } = require('./utils/db.js');
const languageScene = require('./scenes/language.js');

// Scenes
const stage = new Scenes.Stage([languageScene]);

// Middlewares
bot.use(session()); 
bot.use(i18n.middleware());
bot.use(stage.middleware());
registerHandlers();

async function init() {
  await createTables();
  registerHandlers();

  await setBotCommands();
  await bot.launch({ dropPendingUpdates: true })
  logStartup();
}

init();