const db = require("../models");
const Company = db.company;

// Create and Save a new Company
exports.create = async (req, res) => {
  //const exist = ["Comp1", "Comp2", "Comp3", "Comp4"];
  // Create a Company
  const company = new Company({
    businessStatus: req.body.businessStatus,
    companyName: req.body.companyName,
    companyActivity: req.body.companyActivity,
    about: req.body.about,
    companyLocation: req.body.companyLocation,
    billingPlan: req.body.companyLocation,
    companyPhone: req.body.companyPhone,
    uen: req.body.uen,
    incorporation: req.body.incorporation,

    //directors: req.body.directors,
    //shareholders: req.body.shareholders,
    //officers: req.body.officers,
  });

  // Validate request
  /*if (!company.companyName || !company.companyActivity || !company.beneficialOwner) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  if (exist.includes(req.body.companyName)) {
    res.status(400).send({
      message: "It seems like it is available in Singapore"
    });
    return;
  }*/

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

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  Company.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found!`,
        });
      } else res.send({ message: "Company was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Company with id=" + id,
      });
    });
};