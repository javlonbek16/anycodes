import {sequelize} from "./../database/connection";
import {Sequelize, DataTypes, Model} from "sequelize";

class UserTodos extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

UserTodos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user_todos",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default UserTodos;
