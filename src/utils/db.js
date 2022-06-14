const config = require("../data/config.js");
const knex = require('knex')(config.KNEX_CONFIG)

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

// Users 

function addUser(data) {
	return knex("users").insert(data);
}

function getUser(telegram_id) {
	return knex("users").select("*").where({ telegram_id }).first();
}

function updateUser(telegram_id, data) {
	return knex("users").where({ telegram_id }).update(data);
}

module.exports = {
	createTables,
	addUser,
	updateUser,
	getUser
}