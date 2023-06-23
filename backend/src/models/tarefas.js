const tarefa = (sequelize, Datatypes) => {
    const Tarefa = sequelize.define('Tarefa', {
        descricao: {
            type: Datatypes.STRING
        },
        concluido: {
            type: Datatypes.BOOLEAN
        },
        dataCriacao: {
            type: Datatypes.DATE
        },
        dataConclusao: {
            type: Datatypes.DATE
        }
    },
    {
        tableName: 'tarefa'
    });

    return Tarefa;
}

module.exports = tarefa;