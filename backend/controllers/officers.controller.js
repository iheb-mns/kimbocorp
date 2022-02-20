const db = require("../models");
const Officers = db.officers;
const Company = db.company;

// Create and Save a new Officer
exports.create = async (req, res) => {
  const officer = new Officers({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    dateOfAppointment: req.body.dateOfAppointment,
    nationality: req.body.nationality,
    position: req.body.position,
    company: req.body.company
  });

  // Validate request
  if (!officer.firstName || !officer.lastName || !officer.phoneNumber || !officer.company) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  await officer.save()
  await Company.findByIdAndUpdate({ _id: req.body.company }, { $push: { officers: officer } },
    { new: true, useFindAndModify: false });

  res.send("Officer was added successfully");
};

// Retrieve all Officers from the database.
exports.findAll = (req, res) => {

  Officers.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving officers.",
      });
    });
};

// Find a single Officer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Officers.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No Officer found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Officer with id=" + id });
    });
};


// Delete a Officer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Officers.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Officer with id=${id}. Maybe Officer was not found!`,
        });
      } else {
        res.send({
          message: "Officer was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Officer with id=" + id,
      });
    });
};

// Update a Officer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  Officers.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Officer with id=${id}. Maybe Officer was not found!`,
        });
      } else res.send({ message: "Officer was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Officer with id=" + id,
      });
    });
};