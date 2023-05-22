// INstantiate data base, 


// moduele dependencies

const Sequalize = require("sequalize");
const {dbName, dbUser, dbPwd } = require("./utils/configDB");

//confirmation message (limit these in production):
console.log("Opening database connection");

const db = new Sequalize(dbName, dbUser, dbPwd, {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});

//export our instance of sequalize ,which will be modified with models

module.exports = db;
