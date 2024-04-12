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

export default router;
