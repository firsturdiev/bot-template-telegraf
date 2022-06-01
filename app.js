import { bot } from './loader.js'
import { setBotCommands, logStartup } from './utils/misc.js';

async function init() {
  await setBotCommands();
  await bot.launch({ dropPendingUpdates: true })
  
  logStartup();
}

init()