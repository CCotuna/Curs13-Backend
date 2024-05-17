import { Router } from "express";

import { addNewClient} from "../controllers/client.controller.js"
const router = Router();

// router.get("/", getClient);
router.post("/", addNewClient);
// router.delete("/", deleteClient);
// router.put("/", editClient);

export default router;