const db = require("../models");
const Directors = db.directors;
const Company = db.company;

// Create and Save a new Director
exports.create = async (req, res) => {
  const director = new Directors({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    beneficialOwner: req.body.beneficialOwner,
    //company: req.body.company
  });
  await director.save();
  await Company.findOneAndUpdate({ _id: req.body.company }, { $push: { directors: director } });
  res.send("Director was added successfully");
};

// Retrieve all Directors from the database.
exports.findAll = (req, res) => {
  Directors.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving directors.",
      });
    });
};

// Find a single Director with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Directors.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No Director found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Director with id=" + id });
    });
};

// Delete a Director with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Directors.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Director with id=${id}. Maybe Director was not found!`,
        });
      } else {
        res.send({
          message: "Director was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Director with id=" + id,
      });
    });
};

// Update a Director by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  Directors.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Director with id=${id}. Maybe Directors was not found!`,
        });
      } else res.send({ message: "Director was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Director with id=" + id,
      });
    });
};