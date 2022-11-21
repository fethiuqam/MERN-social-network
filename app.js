import express from 'express';
import logger from 'morgan';
import userRouter from './routes/users.js';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api/users', userRouter);

export default app;