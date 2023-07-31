"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const users_controller_1 = require("./../controller/users.controller");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/users', users_controller_1.getUser);
exports.router.post('/users', users_controller_1.postUser);
exports.router.get('/users/:id', users_controller_1.getOneUser);
exports.router.put('/users/:id', users_controller_1.uptadeUser);
exports.router.delete('/users/:id', users_controller_1.deleteUser);