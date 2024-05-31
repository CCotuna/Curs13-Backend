import { createManager } from "../services/manager.services.js"

export async function addNewManager(req, res) {
    // LUAREA DATELOR
    const { name, skills } = req.body;
  
    // VERIFICARI
    if (!name) {
      throw new Error("Name is required");
    }
  
    // LOGICA => SERVICE + REPOSITORTY
    const managerId = await createManager(name, skills);
  
    // RASPUNS
    res.send(JSON.stringify({ id: managerId }));
  }