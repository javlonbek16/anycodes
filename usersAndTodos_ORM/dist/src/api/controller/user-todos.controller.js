"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.postUser = void 0;
const User_Todos_1 = __importDefault(require("../../models/User-Todos"));
const User_1 = __importDefault(require("../../models/User"));
const Todo_1 = __importDefault(require("../../models/Todo"));
const postUser = async (req, res) => {
    try {
        const { user_id, todo_id } = req.body;
        await User_Todos_1.default.create({ userId: user_id, todoId: todo_id });
        res.status(201).json({ message: "Success" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.postUser = postUser;
const getUser = async (req, res) => {
    try {
        const users = await User_Todos_1.default.findAll({
            include: [
                {
                    model: User_1.default,
                    attributes: ["username", "email"],
                },
                {
                    model: Todo_1.default,
                    attributes: ["title", "description"],
                },
            ],
        });
        res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUser = getUser;
