const config = require("./data/config.js");

module.exports = {
  dev: {
    client: "postgresql",
    connection: {
      host: config.DATABASE_HOST,
      user: config.DATABASE_USER,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE_NAME,
      port: config.DATABASE_PORT
    }
  }
}