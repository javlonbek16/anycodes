import { Router } from "express";
import { getUser, postUser } from "../controller/user.controller";

export const router: Router = Router();

router.get('/users', getUser);
router.post('/users', postUser);



