import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Guid } from "guid-typescript";
import { NgForm } from '@angular/forms';
import { Tarefa } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tarefas: Tarefa[] = [ 
    {
      id: Guid.create(),
      title: 'Estudar Javascript/Typescript' ,
      status: 'C'
    },
    {
      id: Guid.create(),
      title: 'Estudar para a prova de Computação em Nuvem',
      status: 'C'
    },
    {
      id: Guid.create(),
      title: 'Finalizar a leitura do livro a Canção de Aquiles',
      status: 'I'
    },
    {
      id: Guid.create(),
      title: 'Ir ao mercado (leite, manteiga e verduras)',
      status: 'I'
    },
    {
      id: Guid.create(),
      title: 'Participar do evento Curso Computação em Nuvem - Estácio',
      status: 'I',
    },
    {
      id: Guid.create(),
      title: 'Comprar Cooler Notebook',
      status: 'C'
    }
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {
  }


  public verificarConcluido(status: string): boolean {
    if(status === 'C'){
      return true
    } else{
      return false
    }
  }

  public onSubmit(form: NgForm){
    const tarefa = new Tarefa(Guid.create(), form.value.title, 'I');
    this.tarefas.push(tarefa);
    form.resetForm();
  }

  public onCheck(id: Guid): void{
    let tarefa = this.tarefas.filter(x=>x.id === id)[0];
    if(tarefa.status === 'C'){
      tarefa.status = 'I'
    } else {
      tarefa.status = 'C'
    }
  }

  public onDelete(id: Guid): void{
    let tarefa = this.tarefas.filter(x=>x.id === id)[0];
    let index = this.tarefas.indexOf(tarefa, 0);
    if(index > -1){
      this.tarefas.splice(index, 1);
    }
  }
}
