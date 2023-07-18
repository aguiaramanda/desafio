import { Request, Response } from "express";
import express from 'express';
import tarefaService from '../services/tarefa';
import tarefasModel from '../models/tarefas';

const router = express();
const tarefas = new tarefaService(tarefasModel);

router.get('/',async (req: Request, res: Response) => {
    const tarefa = await tarefas.getAll();
    res.status(200).json(tarefa);
});

router.get('/buscar/:id',async (req: Request, res: Response) => {
    const tarefa = await tarefas.getOne(req.params.id);
    res.status(200).json(tarefa);
});

router.post('/add', async (req: Request, res: Response) => {
    const { descricao, concluido, dataCriacao } = req.body;
    try{
        await tarefas.add({ descricao, concluido, dataCriacao });
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }
});

router.put('/edit/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { descricao, concluido, dataCriacao, dataConclusao } = req.body;
    try{
        await tarefas.edit({ id, descricao, concluido, dataCriacao, dataConclusao  });
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }
})

router.post('/delete/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    try{
        await tarefas.del({ id });
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }
})


export default router