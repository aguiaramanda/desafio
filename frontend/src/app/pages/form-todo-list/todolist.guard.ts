import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tarefa } from 'src/app/shared/models/todo.model';
import { TodolistService } from 'src/app/todolist.service';

@Injectable({
  providedIn: 'root'
})
export class TodolistGuard implements Resolve<Tarefa> {
  constructor(private service: TodolistService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Tarefa | Observable<Tarefa> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }
    return of({
      id: 0,
      descricao: '',
      concluido: false,
      dataCriacao: new Date(),
      dataConclusao: new Date()
    });
  }
}
