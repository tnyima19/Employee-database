const Sequalize = require("sequalize");
const db = require("../db");

const Task = db.define("task", {
    description: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    priority: {
        type: Sequalize.STRING
    },
    IsComplete:{
        type: Sequalize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Task;