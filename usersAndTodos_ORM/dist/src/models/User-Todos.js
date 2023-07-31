"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./../database/connection");
const sequelize_1 = require("sequelize");
class UserTodos extends sequelize_1.Model {
    id;
    title;
    description;
    created_at;
    updated_at;
}
UserTodos.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: "user_todos",
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = UserTodos;
