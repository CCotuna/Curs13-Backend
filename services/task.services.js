import { sequelize } from "../db.js";

import { Description } from "../models/description.model.js";
import { Task } from "../models/task.model.js";
import { Manager } from "../models/manager.model.js";

export async function getAllTasks() {
  return await Task.findAll({
    attributes: ["id", "name", "favorite"],
  });
}

export async function createTask(
  name,
  favorite,
  description,
  author,
  ClientId,
  assignedManagers
) {
  // LOGICA => SERVICE + REPOSITORTY
  const transaction = await sequelize.transaction();

  try {
    const taskRow = await Task.create(
      { name, favorite, ClientId},
      { transaction }
    );

    // for (const managerId of assignedManagers) {
    //   const manager = await Manager.findByPk(managerId, { transaction })
    //   if (manager) 
    //     await manager.addManagerTask(taskRow, { transaction });
    // };
    
    await Description.create(
      {
        text: description,
        author,
        TaskId: taskRow.id,
      },
      { transaction }
    );

    await transaction.commit();

    return taskRow.dataValues.id;
  } catch (error) {
    console.log("error", error)
    await transaction.rollback();
  }

  return "error";
}

export async function deleteOneTask(taskId) {
  // const transaction = await sequelize.transaction();

  // try {
  // await Description.destroy(
  //   {
  //     where: {
  //       TaskId: taskId,
  //     },
  //   },
  //   { transaction }
  // );

  await Task.destroy(
    {
      where: {
        id: taskId,
      },
    }
    // { transaction }
  );

  //   transaction.commit();
  // } catch (error) {
  //   transaction.rollback();
  // }
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
