import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Description = sequelize.define(
  "Description",
  {
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);
