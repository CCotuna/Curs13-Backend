import { Router } from "express";
// bun - javascript all in one toolkit

import { Task } from "../models/task.model.js";

const router = Router();

const tasks = [];

router.get("/", async function (req, res) {
  const dbTasks = await Task.findAll();
  res.send(JSON.stringify(dbTasks));
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // students.push(req.body);
  // res.send("POST request to the homepage");
  // console.log("ARRAYUL DE STUDENTS: ", students);

  const { id, name, favorite } = req.body;
  await Task.create({ customId: id, name, favorite });

  tasks.push(req.body);
  console.log("TASKS", tasks);
  res.send("OK");
});

router.delete("/", async (req, res) => {
  // const taskId = req.body.taskId;
  const { taskId } = req.body;

  await Task.destroy({
    where: {
      customId: taskId,
    },
  });

  console.log("taskID", taskId);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks.splice(taskIndex, 1);
  console.log("TASKURI MODIFICATE:", tasks);
  res.send("Deleted");
});

router.put("/", (req, res) => {
  const { taskId, value } = req.body;
  // console.log(req);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  console.log("TASKS BEFORE", tasks[taskIndex].name);
  tasks[taskIndex].name = value;

  console.log("AFTER", tasks);

  res.send("Edited");
});

router.put("/favorite", (req, res) => {
  const { taskId } = req.body;
  // console.log(req);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].favorite = !tasks[taskIndex].favorite;
  if (tasks[taskIndex].favorite) {
    console.log("e bifat");
  } else {
    console.log("nu e");
  }
  res.send("Edited");
});

export default router;
