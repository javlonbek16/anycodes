"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./../database/connection");
const sequelize_1 = require("sequelize");
class Todos extends sequelize_1.Model {
    id;
    title;
    description;
    created_at;
    updated_at;
}
Todos.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: "todos",
    tableName: 'todos',
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = Todos;
