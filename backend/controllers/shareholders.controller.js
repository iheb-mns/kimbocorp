const db = require("../models");
const Shareholders = db.shareholders;
const Company = db.company;

// Create and Save a new shareholder
exports.create = async (req, res) => {
  const shareholder = new Shareholders({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    dateOfAppointment: req.body.dateOfAppointment,
    company: req.body.company
  });

  // Validate request
  if (!shareholder.firstName || !shareholder.lastName || !shareholder.phoneNumber || !shareholder.company) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  await shareholder.save()
  await Company.findByIdAndUpdate({ _id: req.body.company }, { $push: { shareholders: shareholder } },
    { new: true, useFindAndModify: false });

  res.send("Shareholder was added successfully");
};

// Retrieve all Shareholders from the database.
exports.findAll = (req, res) => {

  Shareholders.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving shareholder.",
      });
    });
};

// Find a single Shareholder with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Shareholders.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No Shareholder found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Shareholder with id=" + id });
    });
};


// Delete a Shareholder with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Shareholders.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Shareholder with id=${id}. Maybe Shareholder was not found!`,
        });
      } else {
        res.send({
          message: "Shareholder was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Shareholder with id=" + id,
      });
    });
};

// Update a Shareholder by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  Shareholders.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Shareholder with id=${id}. Maybe Shareholder was not found!`,
        });
      } else res.send({ message: "Shareholder was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Shareholder with id=" + id,
      });
    });
};