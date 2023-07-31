"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const user_todos_controller_1 = require("./../controller/user-todos.controller");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get("/user-todos", user_todos_controller_1.getUser);
exports.router.post("/user-todos", user_todos_controller_1.postUser);
