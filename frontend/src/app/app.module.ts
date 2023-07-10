import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderTodoPipe } from './shared/pipes/order-todo.pipe';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FormTodoListComponent } from './pages/form-todo-list/form-todo-list.component';
import { ModalModule  } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    OrderTodoPipe,
    HomeComponent,
    MenuComponent,
    FormTodoListComponent,
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
