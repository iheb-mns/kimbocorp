module.exports = (app) => {
    const tasks = require("../controllers/tasks.controller.js");

    var router = require("express").Router();

    // Create a new Task
    router.post("/", tasks.create);

    // Create a new SubTask
    router.post("/subTask", tasks.createSubTask);

    // Check
    router.put("/:id", tasks.update);

    app.use("/api/tasks", router);
};
