module.exports = (app) => {
    const officers = require("../controllers/officers.controller.js");

    var router = require("express").Router();

    // Create a new Officer
    router.post("/", officers.create);

    // Retrieve all Officers
    router.get("/", officers.findAll);

    // Retrieve a single Officer with id
    router.get("/:id", officers.findOne);

    // Delete a single Officer with id
    router.delete("/:id", officers.delete);

    // Update a Officer with id
    router.put("/:id", officers.update);

    // Approve a Officer with id
    router.put("/approve/:id", officers.approve);

    app.use("/api/officers", router);
};
