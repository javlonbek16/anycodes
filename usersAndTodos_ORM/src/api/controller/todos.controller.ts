import Todos from "../../models/Todo";
import Users from "../../models/User";
import {Router, Request, Response} from "express";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todos.findAll();

    res.status(200).json({message: "OK", todos});
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    // const todos = await Todos.findByPk(id);// primary key berilgan bolsa =>
    const todos = await Todos.findOne({where: {id}});

    res.status(200).json({message: "OK", todos});
  } catch (error) {
    console.log(error);
  }
};

export const postTodos = async (req: Request, res: Response) => {
  try {
    const {title, description} = req.body;

    await Todos.create({title, description});

    res.status(201).json({message: "Success"});
  } catch (error) {
    console.log(error);
  }
};

export const uptadeTodo = async (req: Request, res: Response) => {
  try {
    const {title, description} = req.body;
    const {id} = req.params;
    await Todos.update({title, description}, {where: {id}});
    res.status(201).json({message: "Updated"});
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    await Todos.destroy({where: {id}});
    res.status(201).json({message: "Delited"});
  } catch (error) {
    console.log(error);
  }
};
