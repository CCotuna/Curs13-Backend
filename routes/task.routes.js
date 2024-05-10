import { Router } from "express";
// bun - javascript all in one toolkit

import {
  getTasks,
  addNewTask,
  deleteTask,
  editTask,
  editTaskFavorite
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);
router.post("/", addNewTask);
router.delete("/", deleteTask);
router.put("/", editTask);
router.put("/favorite", editTaskFavorite);

export default router;
