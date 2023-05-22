const express = require("express");
const router = express.Router();
const {Employee, Task} = require("../database/models");

// helper function so we dont need to wrap our 
//handler function in try-catch blocks
// the async handler will catch any error sna dpass 
//them to teh error-hadnling middleware(defined in app.js)
const ash = require("express-async-handler");


router.get(
    "/",
    ash(async (req, res) => {
        let task = await Task.findByPk(req.params.id, {include: [Employee]});
        res.status(200).json(task);
    })
);


router.post("/", function(req, res, next){
    Task.create(req.body)
    .then((createdTask) => res.status(200).json(createdTask))
    .catch((err) => next(err));
});

//Delete task 
router.delete("/:id", function(req,res, next) {
    Task.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(()=> res.status(200).json("Deleted a task!"))
    .catch((err) => next(err));
});


/*****************EDIT*******/
router.put(
    "/:id",
    ash(async(req, res) =>{
        await Task.update(req.body, {where: {id: req.params.id}});
        let task = await Task.findByPk(req.params.id);
        res.status(201).json(task);
    })
);

//Exports our router, so that it can be imported to construct our apiRouter;
module.exports = router;
