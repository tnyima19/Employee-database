const express = require("express");
const router = express.Router();

//Subrouters;
const taskRouter = require("./tasks");
const employeesRouter = require("./employees");

//Mount our subrouters to assemble our apiRouter;
router.use("/tasks", taskRouter);
router.use("/employees", employeesRouter);

//exprot our apiRouter, so that it can be used by our main app in app.js;

module.exports = router;