import { Task } from "../models/task.model.js";

export async function getAllTasks() {
  return await Task.findAll({
    attributes: ["id", "name", "favorite"],
  });
}

export async function createTask(name, favorite) {
  // LOGICA => SERVICE + REPOSITORTY
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
  const taskRow = await Task.findByPk(taskId);
  taskRow.name = value;
  await taskRow.save();
}

export async function editOneTaskFavorite(taskId) {
  const taskRow = await Task.findByPk(taskId);
  taskRow.favorite = !taskRow.favorite;
  await taskRow.save();
}