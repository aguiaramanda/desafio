import Sequelize, { Model } from "sequelize";
import db from "../config/database";

class Tarefa extends Model{

    public id!: number;
    public descricao!: string;
    public concluido!: boolean;
    public dataCriacao!: Date;
    public dataConclusao!: Date;    
}

Tarefa.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        descricao: Sequelize.STRING,
        concluido: Sequelize.BOOLEAN,
        dataCriacao: Sequelize.DATE,
        dataConclusao: Sequelize.DATE,
    },
    {
        sequelize: db,
        freezeTableName: true,
    }
);

export default Tarefa;