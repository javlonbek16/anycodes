import Todos from "../../models/Todo";
import Users from "../../models/User";
import {Request, Response} from "express";

export const postUser = async (req: Request, res: Response) => {
  try {
    const {username, email, password} = req.body;

    await Users.create({username, email, password});

    res.status(201).json({message: "Success"});
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await Users.findAll();

    res.status(200).json({message: "OK", users});
  } catch (error) {
    console.log(error);
  }
};
export const uptadeUser = async (req: Request, res: Response) => {
  try {
    const {username, email, password} = req.body;
    const {id} = req.params;
    await Users.update({username, email, password}, {where: {id}});
    res.status(201).json({message: "Updated User"});
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    await Users.destroy({where: {id}});
    res.status(201).json({message: "Delited User"});
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const users = await Users.findOne({where: {id}});

    res.status(200).json({message: "OK", users});
  } catch (error) {
    console.log(error);
  }
};
