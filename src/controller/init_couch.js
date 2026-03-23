require("dotenv").config();
const db = require("./db");

const dbName = process.env.DB_NAME;

const tabla = db.use(dbName);

module.exports = tabla;
