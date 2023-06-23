const express = require('express');
const router = express.Router();
const { tarefa } = require('../models');
const TarefaService = require('../services/tarefa');

const tarefaService = new TarefaService(tarefa);

router.get('/',async (req,res) => {
    const tarefas = await tarefaService.getAll();
    res.status(200).json(tarefas);
});

router.post('/add', async (req,res) => {
    const { descricao, concluido, dataCriacao } = req.body;
    try{
        await tarefaService.add({ descricao, concluido, dataCriacao });
        res.status(201).send('Tarefa adicionada com sucesso.');
    }catch(erro){
        res.status(400).send('Não foi possível adicionar tarefa.');
    }
});

router.post('/editdescricao/:id', async (req,res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    try{
        await tarefaService.edit({ id }, { descricao});
        res.status(201).send('Tarefa alterada com sucesso.');
    }catch(erro){
        res.status(400).send('Não foi possível concluir a alteração.');
    }
})

router.post('/editconcluido/:id', async (req,res) => {
    const { id } = req.params;
    const { concluido } = req.body;
    try{
        await tarefaService.edit({ id }, { concluido});
        res.status(201).send('Tarefa concluída com sucesso.');
    }catch(erro){
        res.status(400).send('Não foi possível concluir a alteração.');
    }   
})

router.post('/delete/:id', async(req,res) => {
    const { id } = req.params;
    try{
        await tarefaService.del({ id });
        res.status(201).send('Tarefa deletada com sucesso.');
    }catch(erro){
        res.status(400).send('Não foi possível deletar a tarefa.');
    }
})

module.exports = router;