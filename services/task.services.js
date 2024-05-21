import { Task } from "../models/task.model.js";

export async function getAllTasks() {
  const dbTasks = await Task.findAll({
    attributes: ["id", "name", "favorite"],
  });
  return dbTasks;
}

export async function createTask(name, favorite) {
  const taskRow = await Task.create({ name, favorite });
  return taskRow.dataValues.id;
}

export async function deleteOneTask(taskId) {
  await Task.destroy({
    where: {
      id: taskId,
    },
  });
}

export async function editOneTask(taskId, value) {
  const task = await Task.findByPk(taskId);
  task.name = value;
  await task.save();
}

export async function editOneTaskFavorite(taskId) {
  const task = await Task.findByPk(taskId);
  task.favorite = !task.favorite;
  await task.save();
}
