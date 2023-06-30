import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs';
import { Tarefa } from './shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  private readonly apiUrl = 'http://localhost:3000/tarefas';

  constructor( private httpClient: HttpClient ) { }

  listAllTodolist(){
    return this.httpClient.get<Tarefa[]>(this.apiUrl)
      .pipe(
        delay(200),
        tap(console.log)
      );
  }

  add(tarefa: any){
    return this.httpClient.post(this.apiUrl+'/add', tarefa).pipe(take(1));
  }


}
