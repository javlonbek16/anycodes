"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const todos_controller_1 = require("./../controller/todos.controller");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.post('/todos', todos_controller_1.postTodos);
exports.router.get('/todos', todos_controller_1.getAllTodos);
exports.router.get('/todos/:id', todos_controller_1.getOne);
exports.router.put('/todos/:id', todos_controller_1.uptadeTodo);
exports.router.delete('/todos/:id', todos_controller_1.deleteTodo);
