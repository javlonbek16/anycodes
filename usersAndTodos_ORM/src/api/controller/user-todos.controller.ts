import {Request, Response} from "express";
import UserTodos from "../../models/User-Todos";
import Users from "../../models/User";
import Todos from "../../models/Todo";

export const postUser = async (req: Request, res: Response) => {
  try {
    const {user_id, todo_id} = req.body;

    await UserTodos.create({userId: user_id, todoId: todo_id});

    res.status(201).json({message: "Success"});
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await UserTodos.findAll({
      include: [
        {
          model: Users,
          attributes: ["username", "email"],
        },
        {
          model: Todos,
          attributes: ["title", "description"],
        },
      ],
    });

    res.status(200).json({message: "OK", users});
  } catch (error) {
    console.log(error);
  }
};
