import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'fc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { 
   }

  ngOnInit() {
  }

}
