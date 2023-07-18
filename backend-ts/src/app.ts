import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from './routers/index';
import Tarefa from './models/tarefas';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

/*app.get('/', (req, res) => {
    res.send('App online!');
});*/


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

Tarefa.sync().then(() => {
    console.log('Banco conectado');
})

/*app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Olá");
})*/



export default app;

