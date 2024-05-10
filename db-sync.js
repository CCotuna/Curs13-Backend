import { sequelize } from "./db.js";

import { Task } from "./models/task.model.js";

// alter: true - update fara drop
sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
