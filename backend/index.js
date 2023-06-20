const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use('/', (req, res) => { 
    res.status(200).send('Ola')
})

//Conexão com o banco
const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'todolist',
    port: 5432
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        console.log('Banco conectado.');
    }
});

app.listen(3000, () => {
    console.log('Conectado ao servidor...');
});