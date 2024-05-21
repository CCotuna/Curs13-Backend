import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

import { Description } from "./description.model.js";

export const Task = sequelize.define(
  "Task",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

Task.hasOne(Description, { onDelete: "CASCADE" });
Description.belongsTo(Task);

// Description.hasOne(Task);
// Task.belongsTo(Description);
