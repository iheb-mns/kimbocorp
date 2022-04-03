const db = require("../models");
const Shareholders = db.shareholders;
const Company = db.company;

// Create and Save a new Shareholder
exports.create = async (req, res) => {
  const shareholder = req.body.map((item) => new Shareholders({
    firstName: item.firstName,
    lastName: item.lastName,
    phoneNumber: item.phoneNumber,
    email: item.email,
    dateOfAppointment: item.dateOfAppointment,
    company: item.company,
    isApproved: false
  }));

  const id = shareholder.map((item) => item._id);
  const company = shareholder.map((item) => item.company);

  await Shareholders.insertMany(shareholder);
  await Company.findOneAndUpdate(
    { _id: company },
    { $addToSet: { shareholders: { $each: id } } }
  )

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
        message: err.message || "Some error occurred while retrieving shareholders.",
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
exports.delete = async (req, res) => {
  const id = req.params.id;
  const idCompany = await Shareholders.findById(id, 'company').exec()
  await Shareholders.findByIdAndRemove(id);
  await Company.findOneAndUpdate({ _id: idCompany.company }, { $pullAll: { shareholders: [{ _id: id }] } });
  res.send("Shareholder was deleted successfully");
};

// Update a Shareholder by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Shareholders.findByIdAndUpdate(id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      dateOfAppointment: req.body.dateOfAppointment,
      isApproved: false
    })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Shareholder with id=${id}. Maybe Shareholder was not found!`,
        });
      } else
        res.send({ message: "Shareholder was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Shareholder with id=" + id,
      });
    });
};

// Approve a Director by the id in the request
exports.approve = (req, res) => {
  const id = req.params.id;

  Shareholders.findByIdAndUpdate(id, { isApproved: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot accept Shareholder with id=${id}. Maybe Shareholder was not found!`,
        });
      } else
        res.send({ message: "Shareholder was accepted successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error accepting Shareholder with id=" + id,
      });
    });
};