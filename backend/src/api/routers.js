const express = require('express');
const tarefasRouter = require('./tarefas');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('App Online!');
});

router.use('/tarefas', tarefasRouter);

module.exports = router;