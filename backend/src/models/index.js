const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Tarefa = require('./tarefas');

const tarefa = Tarefa(sequelize, Sequelize.DataTypes);

const db = {
    tarefa,
    sequelize
}

module.exports = db;