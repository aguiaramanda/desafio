const express = require('express');
const router = express.Router();
const { tarefa } = require('../models');
const TarefaService = require('../services/tarefa');

const tarefaService = new TarefaService(tarefa);

router.get('/',async (req,res) => {
    const tarefas = await tarefaService.getAll();
    res.status(200).json(tarefas);
});

router.get('/buscar/:id',async (req,res) => {
    const tarefa = await tarefaService.getOne(req.params.id);
    res.status(200).json(tarefa);
});

router.post('/add', async (req,res) => {
    const { descricao, concluido, dataCriacao } = req.body;
    try{
        await tarefaService.add({ descricao, concluido, dataCriacao });
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }
});

router.put('/edit/:id', async (req,res) => {
    const { id } = req.params;
    const { descricao, concluido, dataCriacao, dataConclusao } = req.body;
    try{
        await tarefaService.edit({ id }, { descricao, concluido, dataCriacao, dataConclusao  });
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }
})

router.put('/editconcluido/:id', async (req,res) => {
    const { id } = req.params;
    const { concluido } = req.body;
    try{
        await tarefaService.editConcluido({ id }, { concluido});
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }   
})

router.post('/delete/:id', async(req,res) => {
    const { id } = req.params;
    try{
        await tarefaService.del({ id });
        res.status(201).send();
    }catch(erro){
        res.status(400).send();
    }
})

module.exports = router;