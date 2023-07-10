import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Guid } from "guid-typescript";
import { NgForm } from '@angular/forms';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Tarefa } from 'src/app/shared/models/todo.model';
import { TodolistService } from 'src/app/todolist.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tarefas: Tarefa[] = [];

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;

  tarefa$!: Observable<Tarefa[]>;
  error$!: Subject<boolean>;

  tarefaSelecionada!: Tarefa; 

  constructor(
    public router: Router, 
    private service: TodolistService,
    private route: ActivatedRoute,
    private alertService: AlertModalService) {}

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

  onEdit(id: number) {
    this.router.navigate(['editar', id]);
  }

  onRefresh(){
    this.service.listAllTodolist().subscribe(dados => this.tarefas = dados);
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar tarefas.');
  }

  onDelete(tarefa: Tarefa) {
    this.tarefaSelecionada = tarefa;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover a tarefa?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.delete(tarefa) : EMPTY)
    )
    .subscribe({
      next: success => this.onRefresh(),
      error: err => this.alertService.showAlertDanger('Erro ao remover a tarefa.')
    });
  }

  onConfirmDelete() {
    this.service.delete(this.tarefaSelecionada)
    .subscribe({
      next: success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error: err => {
        this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }

    });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
