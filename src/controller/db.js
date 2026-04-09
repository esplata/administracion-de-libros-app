const nano = require("nano");
const {
  dbAdmin,
  dbAdminPwd,
  dbUrl,
  dbUser,
  dbUserPwd,
  dbName,
} = require("./environment");

const db = nano(
  `http://${dbAdmin}:${dbAdminPwd}@${dbUrl}` || "http://127.0.0.1:5984",
);

const tabla = db.use(dbName);

module.exports = tabla;
