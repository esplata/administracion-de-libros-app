require("dotenv").config();
const nano = require("nano");

const dbAdmin = process.env.DB_ADMIN;
const dbAdminPwd = process.env.DB_ADMIN_PASSWORD;
const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbUserPwd = process.env.DB_USER_PASSWORD;
const dbName = process.env.DB_NAME;

module.exports = nano(
  `http://${dbAdmin}:${dbAdminPwd}@${dbUrl}` || "http://127.0.0.1:5984",
);
