import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { map, switchMap} from 'rxjs/operators';
import { TodolistService } from 'src/app/todolist.service';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AlertModalService } from '../../shared/alert-modal.service';


@Component({
  selector: 'app-form-todo-list',
  templateUrl: './form-todo-list.component.html',
  styleUrls: ['./form-todo-list.component.css']
})
export class FormTodoListComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public router: Router, 
    private service: TodolistService,
    private location: Location,
    private modal: AlertModalService, 
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {

    const tarefa = this.route.snapshot.data['tarefa'];

    this.form = this.fb.group({
      id: [tarefa.id],
      descricao: [tarefa.descricao],
      dataCriacao: [tarefa.id === 0 ? this.newDate() : this.formatDate(tarefa.dataCriacao)],
      dataConclusao: [tarefa.id === 0 ? '' : this.formatDate(tarefa.dataConclusao)],
      concluido: [tarefa.concluido]
    });
  }

  private formatDate(date: string): string | null{
    if(date !== null){
      const [dateComponents, timeComponents] = date.split('T');
      return date = dateComponents;
    } else {
      return this.newDate();
    }
   }

   private newDate(): string | null{
    let date = new Date();
    let fromDate!: string | null;
    fromDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return fromDate;
   }

  public onSubmit(): void{

    let msgSuccess = 'Tarefa cadastrada com sucesso!';
    let msgError = 'Erro ao cadastrar tarefa, tente novamente!';
    if(this.form.value.id){
        msgSuccess = 'Curso atualizado com sucesso!';
        msgError = 'Erro ao atualizar curso, tente novamente!';
    }

    this.service.save(this.form.value).subscribe({
      next: success => {
        this.modal.showAlertSuccess(msgSuccess);
        this.form.reset();
      },
      error: err => this.modal.showAlertDanger(msgError)
    });
  }

  public onCancel(): void{
    this.form.reset();
  }

}
