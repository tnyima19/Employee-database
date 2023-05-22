// register models, set up association sbetween tables, generate
//barrrel file for the models

const Employee = require("./Employee");
const Task = require("./Task");


//Task may be associated with at most one employee
Task.belongsTo(Employee);
Employee.hasMany(Task);
//an employee may be associated with many tasks.



module.exports = {
    Employee,
    Task,
};