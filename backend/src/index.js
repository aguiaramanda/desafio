const express = require('express');
const cors = require('cors');
const routers = require('./api/routers');
const { sequelize } = require('./models');
//const pg = require('pg');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routers);

sequelize.sync().then(() => {
    console.log('Banco conectado.');
});

/*app.use('/', (req, res) => { 
    res.status(200).send('Ola')
});*/

//Conexão com o banco
/*const config = {
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
        
    }
});*/

app.listen(3000, () => {
    console.log('Conectado ao servidor...');
});

