import { Router } from "express";
// bun - javascript all in one toolkit
const router = Router();

const tasks = [];

router.get("/", function (req, res) {
  res.send(JSON.stringify(tasks));
});

router.post("/", (req, res) => {
  // console.log(req.body);
  // students.push(req.body);
  // res.send("POST request to the homepage");
  // console.log("ARRAYUL DE STUDENTS: ", students);

  tasks.push(req.body);
  console.log("TASKS", tasks);
  res.send("OK");
});

router.delete("/", (req, res) => {
  // const taskId = req.body.taskId;
  const { taskId } = req.body;
  console.log("taskID", taskId);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks.splice(taskIndex, 1);
  console.log("TASKURI MODIFICATE:", tasks);
  res.send("Deleted");
});

export default router;
