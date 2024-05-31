import { Router } from "express";

import { addNewManager } from "../controllers/manager.controller.js"
const router = Router();

// router.get("/", getClient);
router.post("/", addNewManager);
// router.delete("/", deleteClient);
// router.put("/", editClient);

export default router;