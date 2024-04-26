import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const Task = sequelize.define(
  "Task",
  {
    customId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },
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
    paranoid: true,
  }
);
