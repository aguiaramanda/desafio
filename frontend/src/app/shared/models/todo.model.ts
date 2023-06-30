import { Guid } from "guid-typescript";

export class Tarefa{
    constructor(
        public id: Guid,
        public descricao: string,
        public concluido: boolean,
        public dataCriacao: Date,
        public dataConclusao: Date
    )
    {  }
}