const config = require("../knexfile.js")['dev'];

const knex = require('knex')(config)

async function createTables() {
    await knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('users', function (table) {
                table.increments().primary();
                table.bigint('telegram_id').unique();
                table.string('full_name');
                table.string('lang');
                table.timestamp('joined_date').defaultTo(knex.fn.now())
            });
        }
    });
}

module.exports = {
    createTables
}