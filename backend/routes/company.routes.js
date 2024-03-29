module.exports = (app) => {
  const company = require("../controllers/company.controller.js");

  var router = require("express").Router();

  // Create a new Company
  router.post("/", company.create);

  // Retrieve all Companies
  router.get("/", company.findAll);

  // Retrieve a single Company with id
  router.get("/:id", company.findOne);

  // Delete a single Company with id
  router.delete("/:id", company.delete);

  // Update a Company with id
  router.put("/:id", company.update);

  // Approve a Company with id
  router.put("/approve/:id", company.approve);

  app.use("/api/company", router);
};
