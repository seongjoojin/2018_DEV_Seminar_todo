import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoService } from './shared/todo.service';
import { environment } from '../../environments/environment'

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TodosComponent, TodoComponent],
  exports: [TodosComponent],
  providers: [
    TodoService,
    (environment.production)? {useClass: TodoService,provide:TodoService} : {useClass: TodoService,provide:TodoService}
  ]
})
export class TodoMngtModule { }
