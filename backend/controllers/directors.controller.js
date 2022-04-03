const db = require("../models");
const Directors = db.directors;
const Company = db.company;

// Create and Save a new Director
exports.create = async (req, res) => {
  const director = req.body.map((item) => new Directors({
    firstName: item.firstName,
    lastName: item.lastName,
    phoneNumber: item.phoneNumber,
    beneficialOwner: item.beneficialOwner,
    nationality: item.nationality,
    email: item.email,
    company: item.company,
    isApproved: false
  }));

  const id = director.map((item) => item._id);
  const company = director.map((item) => item.company);

  await Directors.insertMany(director);
  await Company.findOneAndUpdate(
    { _id: company },
    { $addToSet: { directors: { $each: id } } }
  )

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
exports.delete = async (req, res) => {
  const id = req.params.id;
  const idCompany = await Directors.findById(id, 'company').exec()
  await Directors.findByIdAndRemove(id);
  await Company.findOneAndUpdate({ _id: idCompany.company }, { $pullAll: { directors: [{ _id: id }] } });
  res.send("Director was deleted successfully");
};

// Update a Direct by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Directors.findByIdAndUpdate(id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      beneficialOwner: req.body.beneficialOwner,
      nationality: req.body.nationality,
      email: req.body.email,
      isApproved: false
    })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Director with id=${id}. Maybe Director was not found!`,
        });
      } else
        res.send({ message: "Director was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Director with id=" + id,
      });
    });
};

// Approve a Director by the id in the request
exports.approve = (req, res) => {
  const id = req.params.id;

  Directors.findByIdAndUpdate(id, { isApproved: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot accept Director with id=${id}. Maybe Director was not found!`,
        });
      } else
        res.send({ message: "Director was accepted successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error accepting Director with id=" + id,
      });
    });
};