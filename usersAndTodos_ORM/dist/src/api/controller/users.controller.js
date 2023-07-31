"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = exports.deleteUser = exports.uptadeUser = exports.getUser = exports.postUser = void 0;
const User_1 = __importDefault(require("../../models/User"));
const postUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await User_1.default.create({ username, email, password });
        res.status(201).json({ message: "Success" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.postUser = postUser;
const getUser = async (req, res) => {
    try {
        const users = await User_1.default.findAll();
        res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUser = getUser;
const uptadeUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const { id } = req.params;
        await User_1.default.update({ username, email, password }, { where: { id } });
        res.status(201).json({ message: "Updated User" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.uptadeUser = uptadeUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User_1.default.destroy({ where: { id } });
        res.status(201).json({ message: "Delited User" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteUser = deleteUser;
const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User_1.default.findOne({ where: { id } });
        res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOneUser = getOneUser;
