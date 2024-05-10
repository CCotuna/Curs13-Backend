import {
  createTask,
  getAllTasks,
  deleteOneTask,
  editOneTask,
  editOneTaskFavorite
} from "../services/task.services.js";

export async function getTasks(req, res) {
  const dbTasks = await getAllTasks();

  res.send(JSON.stringify(dbTasks));
}

export async function addNewTask(req, res) {
  // LUAREA DATELOR
  const { name, favorite } = req.body;

  // VERIFICARI
  if (!name) {
    throw new Error("Name is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const taskId = await createTask(name, favorite);

  // RASPUNS
  res.send(JSON.stringify({ id: taskId }));
}

export async function deleteTask(req, res) {
  // const taskId = req.body.taskId;
  const { taskId } = req.body;

  if (!taskId) {
    throw new Error("TaskId is required");
  }

  await deleteOneTask(taskId);

  res.send("Deleted");
}

export async function editTask(req, res) {
  const { taskId, value } = req.body;

  await editOneTask(taskId, value)

  res.send("Edited");
}

export async function editTaskFavorite(req, res) {
  const { taskId } = req.body;

  await editOneTaskFavorite(taskId);

  res.send("Edited");
}