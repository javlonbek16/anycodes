import Joi from "joi";
import {IRegisterBody} from "../types/auth.types";

export const registerSchema = (payload: IRegisterBody) => {
  return Joi.object({
    phone: Joi.string()
      .regex(/^\+998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/)
      .required(),
    password: Joi.string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .required(),
  }).validate(payload);
};
