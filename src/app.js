const config = require('./data/config.js');
const { bot } = require('./loader.js');
const { setBotCommands, logStartup } = require('./utils/misc.js');
const registerHandlers = require('./handlers/handlers.js');
const { createTables } = require('./utils/db.js');

// Startup

async function init() {
  await createTables();
  registerHandlers();

  await setBotCommands();
  await bot.launch(config.BOT_CONFIG);
  bot.catch(err => console.log(err));

  logStartup();
}

// Error handling

process.on('unhandledRejection', err => console.log(err));
process.on('uncaughtException', err => console.log(err));
process.on('rejectionHandled', err => console.log(err));

// Init

init();