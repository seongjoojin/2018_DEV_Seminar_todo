import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() id: string;
  @Input() done: boolean;
  @Input() text: string;

  constructor() { 
   }

  ngOnInit() {
  }

}
