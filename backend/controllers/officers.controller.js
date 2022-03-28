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
    company: req.body.company,
    isApproved: false
  });

  await officer.save();
  await Company.findOneAndUpdate({ _id: req.body.company }, { $push: { officers: officer._id } });
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
exports.delete = async (req, res) => {
  const id = req.params.id;
  const idCompany = await Officers.findById(id, 'company').exec()
  await Officers.findByIdAndRemove(id);
  await Company.findOneAndUpdate({ _id: idCompany.company }, { $pullAll: { officers: [{ _id: id }] } });
  res.send("Officer was deleted successfully");
};

// Update a Officer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Officers.findByIdAndUpdate(id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      dateOfAppointment: req.body.dateOfAppointment,
      nationality: req.body.nationality,
      position: req.body.position,
      isApproved: false
    })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Officer with id=${id}. Maybe Officer was not found!`,
        });
      } else
        res.send({ message: "Officer was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Officer with id=" + id,
      });
    });
};

// Approve a Officer by the id in the request
exports.approve = (req, res) => {
  const id = req.params.id;

  Officers.findByIdAndUpdate(id, { isApproved: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot accept Officer with id=${id}. Maybe Officer was not found!`,
        });
      } else
        res.send({ message: "Officer was accepted successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error accepting Officer with id=" + id,
      });
    });
};