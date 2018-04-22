import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'fc-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    {id:'1',done:false, text:'밥먹기'},
    {id:'2',done:false, text:'밥먹기'}
  ];
  constructor() { }

  ngOnInit() {
  }

  leftCounts() {
    return this.todos.reduce((p, v) => p + ((v.done )? 1: 0), 0);
  }
}
