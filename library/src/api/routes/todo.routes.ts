import { Router } from "express";
import { getTodo, postTodo } from "../controller/todo.controller";

export const router: Router = Router();

router.get('/todo', getTodo);

router.post("/todo", postTodo);