import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'tarefas', component: TodoListComponent},
  { path: 'concluidas', component: TodoListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodolistRoutingModule { }
