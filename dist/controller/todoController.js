"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodoById = exports.getAllTodos = exports.deleteTodo = exports.createTodo = void 0;
const todoModel_1 = require("../models/todoModel");
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //FIXED: To create the todo, we spread our req.body into the create methode of DB and return the data as a json
    const todos = yield todoModel_1.Todos.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: 'Todo created successfully', data: todos });
});
exports.createTodo = createTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteTodo = yield todoModel_1.Todos.findByPk(id);
    yield todoModel_1.Todos.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: 'Todo deleted Succesfully', data: deleteTodo });
});
exports.deleteTodo = deleteTodo;
const getAllTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTodos = yield todoModel_1.Todos.findAll();
    return res
        .status(200)
        .json({ message: 'Fetched all Todos Successfully', data: allTodos });
});
exports.getAllTodos = getAllTodos;
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const oneTodo = yield todoModel_1.Todos.findByPk(id);
    return res
        .status(200)
        .json({ message: 'Fetched one todo Successfully', data: oneTodo });
});
exports.getTodoById = getTodoById;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield todoModel_1.Todos.update(Object.assign({}, req.body), { where: { id } });
    const updatedTodo = yield todoModel_1.Todos.findByPk(id);
    return res
        .status(200)
        .json({ message: 'Successfully updated Todo', data: updatedTodo });
});
exports.updateTodo = updateTodo;
