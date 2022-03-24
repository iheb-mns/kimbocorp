const db = require("../models");
const mongoose = require('mongoose');
const Files = db.files;
const Company = db.company;

exports.create = async (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const file = new Files({
    _id: new mongoose.Types.ObjectId(),
    name: url + '/' + req.file.filename,
    company: req.body.company,
  })
  await file.save();
  console.log(file)
  await Company.findOneAndUpdate({ _id: req.body.company }, { $push: { files: file._id } });
  res.send("File was added successfully");
};

exports.findAll = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json({
      status: "success",
      files,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
  ;
};