import express from "express";
import bodyParser from "body-parser"; // Import body-parser

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Parse JSON bodies

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*"); // http://localhost:3000 in loc de * daca vrem
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

import productRoutes from "./routes/productRoutes.js";
app.use("/product", productRoutes);

import tasksRoutes from "./routes/task.routes.js";
app.use("/tasks", tasksRoutes);

import clientRoutes from "./routes/client.routes.js";
app.use("/client", clientRoutes);

// app.use(
//   "/product",
//   router.delete("/red-pen", function (req, res) {
//     res.send("Hello from API RED hehehehhehe");
//   }),
//   router.get("/blue-pen", function (req, res) {
//     res.send("Hello from API BLUE hehehehhehe");
//   })
// );

app.get("/ruta", (req, res) => {
  res.send("Hello from API hehehehhehe");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
