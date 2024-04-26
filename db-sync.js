import { sequelize } from "./db.js";

import { Task  } from "./models/task.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
