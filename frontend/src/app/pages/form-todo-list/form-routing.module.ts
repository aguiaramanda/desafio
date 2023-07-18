import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormTodoListComponent } from './form-todo-list.component';
import { TodolistGuard } from './todolist.guard';

const routes: Routes = [
  { path: 'nova', 
  component: FormTodoListComponent, 
  resolve: { 
    tarefa: TodolistGuard
  }
},
{ path: 'editar/:id', 
  component: FormTodoListComponent,
  resolve: {
    tarefa: TodolistGuard
  } 
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
