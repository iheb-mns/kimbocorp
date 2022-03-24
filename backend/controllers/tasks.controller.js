const db = require("../models");
const Tasks = db.tasks;
const Company = db.company;

// Create and Save a new Task
exports.create = async (req, res) => {
  const task = new Tasks({
    title: req.body.title,
    company: req.body.company
  });
  
  await task.save();
  await Company.findOneAndUpdate({ _id: req.body.company }, { $push: { tasks: task._id } });
  res.send("Task was added successfully");
};

// Create and Save a new SubTask
exports.createSubTask = async (req, res) => {
  const subTask = new Array({
    description: req.body.description,
    isChecked: req.body.isChecked,
    image: req.body.image,
  });

  await Tasks.findOneAndUpdate({ _id: req.body.task }, { $push: { subTasks: subTask } });
  res.send("SubTask was added successfully");
};

// Check and Uncheck subTask by the id in the request
exports.update = (req, res) => {
  Tasks.findByIdAndUpdate({ _id: '623a12a8d46997f99337f88f' }, { isChecked: true })
  res.send("SubTask was checked successfully");
};
