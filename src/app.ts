import { json, urlencoded } from 'body-parser';
import express from 'express';
import todoRouter from './routes/todoRoutes';
import connection from './db/config';
import dotenv from 'dotenv'

dotenv.config()
const app = express();


app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/todos', todoRouter);
app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		res.status(500).json({ message: err.message });
	}
);

connection.sync().then(() => {
		console.log('Database synced successfully');
	}).catch ((err) => {
		console.log('Err', err);
	})

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})
