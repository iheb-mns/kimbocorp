const db = require("../models");
const Company = db.company;

// Create and Save a new Company
exports.create = async (req, res) => {
  // Create a Company
  const company = new Company({
    companyName: req.body.companyName,
    companyActivity: req.body.companyActivity,
    about: req.body.about,
    companyLocation: req.body.companyLocation,
    billingPlan: req.body.companyLocation,
    companyPhone: req.body.companyPhone,
    uen: req.body.uen,
    businessStatus: req.body.businessStatus,
    incorporation: req.body.incorporation,
    isApproved: false,
  });

  // Save Company in the database.
  await company.save(company).then((data) => {
    res.send(data);
  })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Company.",
      });
    });
};

// Retrieve all Companies from the database.
exports.findAll = (req, res) => {
  Company.find()
    .populate("directors")
    //.populate("shareholders")
    //.populate("officers")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companies.",
      });
    });
};

// Retrieve all Directors of Company.
exports.findDirectors = (req, res) => {
  const id = req.params.id

  Company.findById(id)
    .populate("directors")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companies.",
      });
    });
};

// Find a single Company with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Company.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "No Company found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Company with id=" + id });
    });
};

// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Company.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Company with id=${id}. Maybe Company was not found!`,
        });
      } else {
        res.send({
          message: "Company was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Company with id=" + id,
      });
    });
};

// Update a Company by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  const company = new Company({
    _id: req.params.id,
    companyName: req.body.companyName,
    companyActivity: req.body.companyActivity,
    about: req.body.about,
    companyLocation: req.body.companyLocation,
    billingPlan: req.body.companyLocation,
    companyPhone: req.body.companyPhone,
    uen: req.body.uen,
    businessStatus: req.body.businessStatus,
    incorporation: req.body.incorporation,
    isApproved: false,
  })

  Company.findByIdAndUpdate({ _id: req.params.id }, company)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found!`,
        });
      } else
        res.send({ message: "Company was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Company with id=" + id,
      });
    });
};

// Update a Company by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  const company = new Company({
    _id: req.params.id,
    isApproved: true,
  })

  Company.findByIdAndUpdate({ _id: req.params.id }, company)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot accept Company with id=${id}. Maybe Company was not found!`,
        });
      } else
        res.send({ message: "Company was accepted successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error accepting Company with id=" + id,
      });
    });
};