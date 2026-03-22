require("dotenv").config();

const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbUserPswd = process.env.DB_USER_PASSWORD;
const dbName = process.env.DB_NAME;

const nano = require("nano")({
  url: { dbUrl },
});
const dbLavoro = nano.db.use({ dbName });
await nano.auth({ dbUser }, { dbUserPswd });
