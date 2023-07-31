"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relations = void 0;
const User_1 = __importDefault(require("./User"));
const Todo_1 = __importDefault(require("./Todo"));
const User_Todos_1 = __importDefault(require("./User-Todos"));
const relations = () => {
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
    User_1.default.hasMany(User_Todos_1.default);
    User_Todos_1.default.belongsTo(User_1.default);
    Todo_1.default.hasMany(User_Todos_1.default);
    User_Todos_1.default.belongsTo(Todo_1.default);
};
exports.relations = relations;
