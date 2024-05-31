import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Task } from "./task.model.js";

export const Manager = sequelize.define(
  "Manager",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

Manager.belongsToMany(Task, { through: "ManagerTask" });
Task.belongsToMany(Manager, { through: "ManagerTask" });
