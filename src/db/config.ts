import { Sequelize } from 'sequelize-typescript';
import { Todos } from '../models/todoModel';

const connection = new Sequelize({
	dialect: 'mysql',
	host: 'localhost',
	username: 'root',
	// password: '1253',
	database: 'todo',
	logging: false,
	models: [Todos],
});
export default connection;
