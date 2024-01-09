const { default: mongoose } = require("mongoose");
const taskModel = require("../models/Task");

const taskController = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await taskModel.create({
      title,
      description,
    });
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const getTask = async (req, res) => {
  try {
    const getAll = await taskModel.find({});
    res.status(200).json(getAll);
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
};
const getSingleTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }
  try {
    const singleTask = await taskModel.findById(id);
    res.status(200).json(singleTask);
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
};
const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("cannot find ID");
  }
  try {
    const task = await taskModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json(task);
    return "updated successfully";
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("cannot find ID");
  }
  try {
    const deleteTask = await taskModel.findByIdAndDelete(id);
    res.status(200).json(deleteTask);
  } catch (error) {
    res.status(400).json({ error: e.message });
  }
};
module.exports = {
  taskController,
  getTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
