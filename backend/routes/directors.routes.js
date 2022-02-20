module.exports = (app) => {
  const directors = require("../controllers/directors.controller.js");

  var router = require("express").Router();

  // Create a new Director
  router.post("/", directors.create);

  // Retrieve all Directors
  router.get("/", directors.findAll);

  // Retrieve a single Director with id
  router.get("/:id", directors.findOne);

  // Delete a single Director with id
  router.delete("/:id", directors.delete);

  // Update a Director with id
  router.put("/:id", directors.update);

  app.use("/api/directors", router);
};
