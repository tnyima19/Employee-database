const pgtools = require("pgtools");
const {dbName, dbUser, dbPwd } = require("./configDB");

const config ={
    user: dbUser,
    host: "localhost",
    port: 5432,
    password: dbPwd,
};

//attempt to create DB 
// if it already exists, this does nothging and jsut 
//connects toe the existing db of that same name
const createDB = async() =>{
    try {
        await pgtools.created(config,dbName);
        console.log(`Successfully created the database: ${dbName}!`);

    }catch(err){
        if(err.name === "duplicate_database"){
            console.log(`Databse ${dbName} already exists`);
            return;
        } else{
            console.error("CreatDB error:", err);
            process.exit(1);
        }
    }
};

module.exports = createDB;
