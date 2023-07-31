"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./../database/connection");
const sequelize_1 = require("sequelize");
class Users extends sequelize_1.Model {
    id;
    title;
    username;
    email;
    password;
    created_at;
    updated_at;
}
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: "users",
    tableName: 'users',
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = Users;
