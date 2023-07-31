import { Users } from "../../entities/User.entity";
import { UserRepo } from "../../repositories/User.repo";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response): Promise<void> => {
    const users: Users[] = await UserRepo.find({
        relations: {
            todos: true,
        },
    });

    res.json({ users });
};

export const postUser = async (req: Request, res: Response): Promise<void> => {
    const { first_name, last_name, date_birth, date_death, country, bio } = req.body;

    const user: Users = UserRepo.create({ first_name, last_name, date_birth, date_death, country, bio });
    await UserRepo.save(user);

    res.status(201).json({ data: user, message: " Author created" });
};