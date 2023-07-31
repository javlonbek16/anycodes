import {Router} from "express";
import {registerController, verifyPhone} from "../controllers/auth.controller";

export const router = Router();

router.post("/auth/register", registerController);
router.post("/auth/verify", verifyPhone);
