import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import Routes from './router/sendEmail.routes.js';

const app = express();
app.use(cors({ origin: ['https://www.kearnytruckcenter.com', 'https://kearnytruckcenter.com'], credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', Routes);
app.use('/robots.txt', express.static(path.join(path.resolve(), 'robots.txt')));

export default app;
