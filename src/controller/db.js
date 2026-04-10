//const nano = require("nano");
//require("dotenv").config();

const PouchDB = require("pouchdb").default;
//import PouchDB from "pouchdb";

const {
  dbAdmin,
  dbAdminPwd,
  dbUrl,
  dbUser,
  dbUserPwd,
  dbName,
} = require("./environment");

// const db = new pouchDB(
//   `http://${process.env.DB_ADMIN}:${process.env.DB_ADMIN_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}`,
// );
const db = new PouchDB(
  "http://admin:Casaspagna2013@$192.168.15:21:5984/testdb",
);

// const db = nano(
//   `http://${dbAdmin}:${dbAdminPwd}@${dbUrl}` || "http://127.0.0.1:5984",
// );
// const db = nano("http://admin:Casaspagna2013@$192.168.15:21:5984/testdb");

//const tabla = db.use(dbName);

module.exports = db;
