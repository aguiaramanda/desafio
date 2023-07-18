
import express from 'express';
import tarefas from '../models/tarefas';
import routerTarefas from './tarefas';

const app = express();

app.use('/tarefas', routerTarefas);

/*app.get('/tarefas',async (req: Request, res: Response) => {
    const tarefa = await tarefas.findAll();
    res.status(200).json(tarefa);
});*/

app.get('/', (req, res) => {
    res.send('App online!');
});



export default app;