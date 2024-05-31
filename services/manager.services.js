import { Manager } from "../models/manager.model.js";

export async function createManager(name, skills) {
  // LOGICA => SERVICE + REPOSITORTY
  const managerRow = await Manager.create({ name, skills });

  return managerRow.dataValues.id;
}
