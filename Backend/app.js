import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Routes from './router/sendEmail.routes.js';

const app = express();
// 'http://localhost:5000', 
app.use(cors({ origin: ['https://www.kearnytruckcenter.com', 'https://kearnytruckcenter.com'], credentials: true }));
app.use(morgan('dev'));
app.use(express.json());  
app.use('/api', Routes);

export default app;