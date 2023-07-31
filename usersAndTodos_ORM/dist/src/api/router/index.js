"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_route_1 = require("./todos.route");
const users_route_1 = require("./users.route");
const user_todos_route_1 = require("./user-todos.route");
exports.default = [todos_route_1.router, users_route_1.router, user_todos_route_1.router];
