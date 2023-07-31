import { myDataSource } from "../database/connection";
import { Users } from "../entities/User.entity";

export const UserRepo = myDataSource.getRepository(Users);
