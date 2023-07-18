import express, { Request, Response } from 'express';
const tarefasRouter = require('./tarefas');
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('App Online!');
});

router.use('/tarefas', tarefasRouter);

export default router