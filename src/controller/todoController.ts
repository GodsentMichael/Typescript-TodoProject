import { RequestHandler } from 'express';

import { Todos } from '../models/todoModel';

export const createTodo: RequestHandler = async (req, res, next) => {
	//FIXED: To create the todo, we spread our req.body into the create methode of DB and return the data as a json
	const todos = await Todos.create({ ...req.body });
	return res
		.status(200)
		.json({ message: 'Todo created successfully', data: todos });
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	const deleteTodo: Todos | null = await Todos.findByPk(id);

	await Todos.destroy({ where: { id } });

	return res
		.status(200)
		.json({ message: 'Todo deleted Succesfully', data: deleteTodo });
};

export const getAllTodos: RequestHandler = async (req, res, next) => {
	const allTodos: Todos[] = await Todos.findAll();

	return res
		.status(200)
		.json({ message: 'Fetched all Todos Successfully', data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	const oneTodo: Todos | null = await Todos.findByPk(id);
	return res
		.status(200)
		.json({ message: 'Fetched one todo Successfully', data: oneTodo });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	await Todos.update({ ...req.body }, { where: { id } });
	const updatedTodo: Todos | null = await Todos.findByPk(id);
	return res
		.status(200)
		.json({ message: 'Successfully updated Todo', data: updatedTodo });
};
