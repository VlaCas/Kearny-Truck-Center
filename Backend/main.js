import app from './app.js'
import { config } from 'dotenv';

config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});