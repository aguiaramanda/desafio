import { Guid } from "guid-typescript";

export class Tarefa{
    constructor(
        public id: Guid,
        public title: string,
        public status: string
    )
    {  }
}