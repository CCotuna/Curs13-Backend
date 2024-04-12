import { Router } from "express";

const router = Router();

router.delete("/red-pen", function (req, res) {
  res.send("Hello from API RED ododo");
}),
  router.get("/blue-pen", function (req, res) {
    res.send("Hello from API BLUE ododo");
  });

export default router;
