import express from 'express';
import cors from 'cors';
import routers from './api/routers';
import sequelize from './models';
//const pg = require('pg');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routers);

sequelize.sync().then(() => {
    console.log('Banco conectado.');
});

app.listen(3000, () => {
    console.log('Conectado ao servidor...');
});


