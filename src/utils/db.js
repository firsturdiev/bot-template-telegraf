const config = require("../knexfile.js")['dev'];

const knex = require('knex')(config)

async function createTables() {
	await knex.schema.hasTable('users').then(function (exists) {
		if (!exists) {
			return knex.schema.createTable('users', function (table) {
				table.increments().primary();
				table.bigint('telegram_id').unique();
				table.string('full_name');
				table.timestamp('joined_date').defaultTo(knex.fn.now())
			});
		}
	});
}

// Users 

function addUser(data) {
	return knex("users").insert(data);
}

async function isRegistred(telegram_id) {
	const user = await knex("users").select("*").where({ telegram_id }).first();
	return Boolean(user);
}

module.exports = {
	createTables,
	addUser,
	isRegistred
}