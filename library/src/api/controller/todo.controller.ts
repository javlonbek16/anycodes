import { Todo } from "../../entities/Todo.entity";
import { TodoRepo } from "../../repositories/Todo.repo";
import { Request, Response } from "express";

export const getTodo = async (req: Request, res: Response): Promise<void> => {

  const todo: Todo[] = await TodoRepo.find({
    relations: {
      user_id: true,
    },
  });
  res.json({ todo });
};

export const postTodo = async (req: Request, res: Response): Promise<void> => {
  const { title, pages, year, country, description, user_id } = req.body;

  const todo: Todo = TodoRepo.create({ title, pages, year, country, description, user_id });
  await TodoRepo.save(todo);

  res.json({ todo });
};