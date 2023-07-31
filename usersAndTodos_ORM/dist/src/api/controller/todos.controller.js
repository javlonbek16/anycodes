"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.uptadeTodo = exports.postTodos = exports.getOne = exports.getAllTodos = void 0;
const Todo_1 = __importDefault(require("../../models/Todo"));
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo_1.default.findAll();
        res.status(200).json({ message: "OK", todos });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllTodos = getAllTodos;
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        // const todos = await Todos.findByPk(id);// primary key berilgan bolsa =>
        const todos = await Todo_1.default.findOne({ where: { id } });
        res.status(200).json({ message: "OK", todos });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOne = getOne;
const postTodos = async (req, res) => {
    try {
        const { title, description } = req.body;
        await Todo_1.default.create({ title, description });
        res.status(201).json({ message: "Success" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.postTodos = postTodos;
const uptadeTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;
        await Todo_1.default.update({ title, description }, { where: { id } });
        res.status(201).json({ message: "Updated" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.uptadeTodo = uptadeTodo;
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo_1.default.destroy({ where: { id } });
        res.status(201).json({ message: "Delited" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteTodo = deleteTodo;
