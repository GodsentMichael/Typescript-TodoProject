"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todoModel_1 = require("../models/todoModel");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    // password: 'Michy1253',
    database: 'todo',
    logging: false,
    models: [todoModel_1.Todos],
});
exports.default = connection;
