import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Routes from './router/sendEmail.routes.js';

const app = express();

app.use(cors({ origin: ['http://localhost:5000', 'https://kearnytruckcenter.com'], credentials: true }));
app.use(morgan('dev'));
app.use(express.json());  
app.use('/api', Routes);

export default app;