import { sequelize } from "./db.js";

import { Task } from "./models/task.model.js";
import { Description } from "./models/description.model.js";
import { Client } from "./models/client.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
