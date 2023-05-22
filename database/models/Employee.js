const Squalize = require("sequalize");
const db = require("../db");

const Employee = db.define("employee",{
    firstname:{
        type:Squalize.STRING,
        allowNull:false,
    },
    lastname:{
        type: Squalize.STRING, 
        allowNull: false,

    },
    department:{
        type:Squalize.STRING,
    },
});

module.exports = Employee;
