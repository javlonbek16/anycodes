import {NextFunction, Request, RequestHandler, Response} from "express";
import bcrypt from "bcrypt";
import axios from "axios";

import {IRegisterBody} from "../types/auth.types";
import User from "../models/User.model";
import {CustomError} from "../utils/custom-error";
import {registerSchema} from "../validations/auth.validation";
import {send} from "../utils/sms.service";

export const registerController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {phone, password} = req.body as IRegisterBody;

    const {error} = registerSchema({phone, password});
    if (error) throw new CustomError(error.message, 400);

    const user = await User.findOne({phone, isVerified: true});
    if (user) throw new CustomError("User already registered", 403);

    const hashedPass: string = await bcrypt.hash(password, 10);

    await User.create({phone, password: hashedPass});

    const code: number = Math.floor(100000 + Math.random() * 900000);

    res.cookie("code", code, {maxAge: 120 * 100 * 60});
    res.cookie("phone", phone, {maxAge: 120 * 100 * 60});

    await send(phone, code);

    res.status(201).json({message: "SMS sent to your phone number"});
  } catch (error) {
    next(error);
  }
};

export const verifyPhone: RequestHandler = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {code, phone} = req.cookies;
    const {verifyCode} = req.body;

    if (code != verifyCode) {
      throw new CustomError("Incorrect code", 403);
    }

    await User.findOneAndUpdate(
      {phone},
      {
        $set: {
          isVerified: true,
        },
      }
    );

    res.status(200).json({message: "Success"});
  } catch (error) {
    next(error);
  }
};
