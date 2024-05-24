import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Task } from "./task.model.js";

export const Client = sequelize.define(
  "Client",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

Client.hasMany(Task);
Task.belongsTo(Client);
