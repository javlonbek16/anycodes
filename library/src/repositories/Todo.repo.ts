import {myDataSource} from "../database/connection";
import {Todo} from "../entities/Todo.entity";

export const TodoRepo = myDataSource.getRepository(Todo);
