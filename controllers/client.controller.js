import { createClient } from "../services/client.services.js"

export async function addNewClient(req, res) {
    // LUAREA DATELOR
    const { name, position, priority } = req.body;
  
    // VERIFICARI
    if (!name) {
      throw new Error("Name is required");
    }
  
    // LOGICA => SERVICE + REPOSITORTY
    const clientId = await createClient(name, position, priority);
  
    // RASPUNS
    res.send(JSON.stringify({ id: clientId }));
  }