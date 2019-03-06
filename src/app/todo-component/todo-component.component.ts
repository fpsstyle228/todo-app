import { Component, OnInit } from '@angular/core';
import {ToDo} from './ToDo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  userTask: string;
  toDos: ToDo[];
  constructor() { }
  toDoChanged(userString: string) {
    this.userTask = userString;
    console.log(this.userTask);
  }
  ngOnInit() {
    this.toDos = [
      {
        id: 1,
        title: 'Todo one',
        completed: false
      },
      {
        id: 2,
        title: 'Todo two',
        completed: false
      },
      {
        id: 3,
        title: 'Todo third',
        completed: false
      }
    ];
  }

}
