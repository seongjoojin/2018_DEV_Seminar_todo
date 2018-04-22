import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TodosComponent, TodoComponent],
  exports: [TodosComponent]
})
export class TodoMngtModule { }
