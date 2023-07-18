import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent  } from './pages/todo-list/todo-list.component'; 
import { FormTodoListComponent } from './pages/form-todo-list/form-todo-list.component';
import { TodolistGuard } from './pages/form-todo-list/todolist.guard';
import { CommonModule } from '@angular/common';

/*const routes: Routes = [
  { path: '', component: HomeComponent }
  { path: 'home', component: HomeComponent },
  { path: 'tarefas', component: TodoListComponent},
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
  },
  { path: 'concluidas', component: TodoListComponent}
];*/

@NgModule({
  imports: [CommonModule]
})
export class AppRoutingModule { }
