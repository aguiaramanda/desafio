import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Guid } from "guid-typescript";
import { NgForm } from '@angular/forms';
import { Tarefa } from 'src/app/shared/models/todo.model';
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(public router: Router, private service: TodolistService) {}

  ngOnInit() {
    this.service.listAllTodolist().subscribe(dados => this.tarefas = dados);
  }


  public verificarConcluido(concluido: boolean): boolean {
    if(concluido === true){
      return true
    } else{
      return false
    }
  }

  public onCheck(id: Guid): void{
    let tarefa = this.tarefas.filter(x=>x.id === id)[0];
    if(tarefa.concluido === true){
      tarefa.concluido = false
    } else {
      tarefa.concluido = true
    }
  }

  
  public onSubmit(form: NgForm){
    console.log(form.value.concluido);
    //this.service.add(form.value);

    //const tarefa = new Tarefa(Guid.create(), form.value.descricao, form.value.concluido, form.value.dataCriacao, form.value.dataConclusao);
    //this.tarefas.push(tarefa);
    //form.resetForm();
  }

 

  /*public onDelete(id: Guid): void{
    let tarefa = this.tarefas.filter(x=>x.id === id)[0];
    let index = this.tarefas.indexOf(tarefa, 0);
    if(index > -1){
      this.tarefas.splice(index, 1);
    }
  }*/
}
