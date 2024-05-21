import { Client } from "../models/client.model.js";

export async function createClient(name, position, priority) {
  // LOGICA => SERVICE + REPOSITORTY
  const clientRow = await Client.create({ name, position, priority });

  return clientRow.dataValues.id;
}
