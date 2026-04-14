//const nano = require("nano");
// require("dotenv").config();

const PouchDB = require("pouchdb").default;
//import PouchDB from "pouchdb";

const { dbAdmin, dbAdminPwd, dbUrl, dbName } = require("./environment");

// const dbAdmin = process.env.DB_ADMIN;
// const dbAdminPwd = process.env.DB_ADMIN_PASSWORD;
// const dbUrl = process.env.DB_URL;
// const dbName = process.env.DB_NAME;

// const db = new pouchDB(
//   `http://${process.env.DB_ADMIN}:${process.env.DB_ADMIN_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}`,
// );

// const db = new PouchDB("http://192.168.15.21:5984/books", {
//   auth: {
//     username: "admin",
//     password: "casaspagna2013",
//   },
// });

const db = new PouchDB(`http://${dbUrl}/${dbName}`, {
  auth: {
    username: `${dbAdmin}`,
    password: `${dbAdminPwd}`,
  },
});

// const db = nano(
//   `http://${dbAdmin}:${dbAdminPwd}@${dbUrl}` || "http://127.0.0.1:5984",
// );
// const db = nano("http://admin:Casaspagna2013@$192.168.15:21:5984/testdb");

//const tabla = db.use(dbName);

module.exports = db;
