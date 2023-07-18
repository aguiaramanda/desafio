import Tarefa from "src/models/tarefas";


class TarefaService{
    constructor(public tarefa: typeof Tarefa){
    }

    async getAll(){
        const tarefas = await this.tarefa.findAll();
        return tarefas;
    }

    async getOne(id: string){
        const tarefa = await this.tarefa.findByPk(parseInt(id));
        return tarefa;
    }

    async add(tarefaADD: any){
        try{
            await this.tarefa.create(tarefaADD);
        } catch(erro){
            console.error(erro.message);
            throw erro;
        }
    }

    async edit(tarefaEDIT: any){
        try{
            await this.tarefa.update({
                descricao: tarefaEDIT.descricao,
                concluido: tarefaEDIT.concluido,
                dataCriacao: tarefaEDIT.dataCriacao,
                dataConclusao: tarefaEDIT.dataConclusao
            }, {
                where: 
                    {id: tarefaEDIT.id}
            });
        }catch(erro){
            console.error(erro.message);  
            throw erro;
        }
    }

    async del(id: any){
        try{
            await this.tarefa.destroy({where: {id: id.id}});
        } catch(erro){
            console.error(erro.message);  
            throw erro;
        }
    }


}

export default TarefaService