class TarefaService{
    constructor(TarefaModel){
        this.tarefa = TarefaModel;
    }

    async getAll(){
        const tarefas = await this.tarefa.findAll();
        return tarefas;
    }

    async add(tarefaDTO){
        try{
            await this.tarefa.create(tarefaDTO);
        }catch(erro){
            console.error(erro.message);  
            throw erro;
        }
    }

    async edit(id, tarefaDTO){
        try{
            await this.tarefa.update({
                descricao: tarefaDTO.descricao,
                concluido: tarefaDTO.concluido,
                dataCriacao: tarefaDTO.dataCriacao,
                dataConclusao: tarefaDTO.dataConclusao
            }, {
                where: 
                    {id: id.id}
            });
        }catch(erro){
            console.error(erro.message);  
            throw erro;
        }
    }

    async editConcluido(id, tarefaDTO){
        try{
            await this.tarefa.update({
                concluido: tarefaDTO.concluido
            }, {
                where: 
                    {id: id.id}
            });
        }catch(erro){
            console.error(erro.message);  
            throw erro;
        }
    }

    async del(id){
        try{
            await this.tarefa.destroy({where: {id: id.id}});
        } catch(erro){
            console.error(erro.message);  
            throw erro;
        }
    }
}

module.exports = TarefaService;