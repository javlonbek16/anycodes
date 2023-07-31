import {postUser, getUser} from "./../controller/user-todos.controller";
import {Router} from "express";

export const router = Router();

router.get("/user-todos", getUser);
router.post("/user-todos", postUser);
