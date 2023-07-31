import {
	deleteTodo,
	getAllTodos,
	getOne,
	postTodos,
	uptadeTodo,
} from './../controller/todos.controller';
import { Router } from 'express';

export const router = Router();

router.post('/todos', postTodos);
router.get('/todos', getAllTodos);
router.get('/todos/:id', getOne);
router.put('/todos/:id', uptadeTodo);
router.delete('/todos/:id', deleteTodo);
