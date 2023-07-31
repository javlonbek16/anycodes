import Users from "./User";
import Todos from "./Todo";
import UserTodos from "./User-Todos";

export const relations = () => {
  // Users.hasMany(Todos, {
  //   foreignKey: {
  //     name: "user_id",
  //     allowNull: false,
  //   },
  // });
  // Todos.belongsTo(Users, {
  //   foreignKey: {
  //     name: "user_id",
  //     allowNull: false,
  //   },
  // });
  // Users.hasOne(Todos, {
  //   foreignKey: {
  //     name: "user_id",
  //     allowNull: false,
  //   },
  // });
  // Todos.hasOne(Users, {
  //   foreignKey: {
  //     name: "user_id",
  //     allowNull: false,
  //   },
  // });

  Users.hasMany(UserTodos);
  UserTodos.belongsTo(Users);
  Todos.hasMany(UserTodos);
  UserTodos.belongsTo(Todos);
};
