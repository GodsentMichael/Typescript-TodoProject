import { Router } from 'express';
import {
	createTodo,
	deleteTodo,
	getAllTodos,
	getTodoById,
	updateTodo,
} from '../controller/todoController';

const todoRouter = Router()

todoRouter.post('/', createTodo)

todoRouter.get('/', getAllTodos)

todoRouter.get('/', getTodoById)

todoRouter.put('/', updateTodo)

todoRouter.delete('/', deleteTodo)

export default todoRouter
