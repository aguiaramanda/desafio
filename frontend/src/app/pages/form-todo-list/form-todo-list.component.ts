import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodolistService } from 'src/app/todolist.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { AlertModalService } from '../../shared/alert-modal.service';


@Component({
  selector: 'app-form-todo-list',
  templateUrl: './form-todo-list.component.html',
  styleUrls: ['./form-todo-list.component.css']
})
export class FormTodoListComponent implements OnInit {

  descricao: string = '';
  dataCriacao: Date = new Date();
  dataConclusao: Date = new Date();
  concluido: boolean = false;

  form = new FormGroup({
    descricao: new FormControl(this.descricao),
    dataCriacao: new FormControl(this.dataCriacao.toISOString().split("T")[0]),
    dataConclusao:  new FormControl(this.dataConclusao.toISOString().split("T")[0]),
    concluido: new FormControl(this.concluido)
  });

  constructor(
    public router: Router, 
    private service: TodolistService,
    private location: Location,
    private modal: AlertModalService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    let msgSuccess = 'Tarefa cadastrada com sucesso!';
    let msgError = 'Erro ao cadastrar tarefa, tente novamente!';
    this.service.add(this.form.value).subscribe({
      next: success => this.modal.showAlertSuccess(msgSuccess),
      error: err => this.modal.showAlertDanger(msgError)
    });
  }

  public onCancel(){
    this.form.reset();
  }

}
