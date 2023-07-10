import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './shared/models/todo.model';
import { delay, tap, take } from 'rxjs';

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
  loadByID(id: any){
    return this.httpClient.get<Tarefa>(this.apiUrl+'/buscar/'+id).pipe(take(1));
  }

  private add(tarefa: Tarefa){
    return this.httpClient.post(this.apiUrl+'/add', tarefa).pipe(take(1));
  }

  private update(tarefa: Tarefa){
    return this.httpClient.put(this.apiUrl+'/edit/'+tarefa.id, tarefa).pipe(take(1));
  }

  save(tarefa: Tarefa) {
    if (tarefa.id) {
      return this.update(tarefa);
    }
    return this.add(tarefa);
  }

  updateConcluido(tarefa: Tarefa){
    return this.httpClient.put(this.apiUrl+'/editconcluido/'+tarefa.id, tarefa).pipe(take(1));
  }

  delete(tarefa: Tarefa) {
    return this.httpClient.post(this.apiUrl+'/delete/'+tarefa.id, tarefa).pipe(take(1));
  }
}
