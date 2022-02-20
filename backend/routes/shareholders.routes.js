module.exports = (app) => {
    const shareholders = require("../controllers/shareholders.controller.js");

    var router = require("express").Router();

    // Create a new Shareholder
    router.post("/", shareholders.create);

    // Retrieve all Shareholders
    router.get("/", shareholders.findAll);

    // Retrieve a single Shareholder with id
    router.get("/:id", shareholders.findOne);

    // Delete a single Shareholder with id
    router.delete("/:id", shareholders.delete);

    // Update a Shareholder with id
    router.put("/:id", shareholders.update);

    app.use("/api/shareholders", router);
};
