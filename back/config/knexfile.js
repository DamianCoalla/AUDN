const knex = require("knex")({
  client: "pg",
  connection: {
    host: "tuffi.db.elephantsql.com",
    port: 5432,
    user: "jqijpban",
    password: process.env.DB_PASSWORD,
    database: "jqijpban",
  },
});

module.exports = knex;
