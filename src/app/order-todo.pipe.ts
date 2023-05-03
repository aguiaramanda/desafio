import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'sort-by-typescript';
import { Tarefa } from 'src/models/todo.model';

@Pipe({
  name: 'orderTodo'
})
export class OrderTodoPipe implements PipeTransform {

  transform(list: Tarefa[], params: string): Tarefa[]  {
    if (params.length){
      return list.sort(sortBy(params));
    }
    return list;
  }

}
