import { Component, OnInit } from '@angular/core';
import {ToDoInterface} from '../ToDoInterface';
import {ToDoService} from "../to-do-service.service";

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  userTask: string;
  textFromButton: string;
  toDos: ToDoInterface[];
  constructor(private _toDoService: ToDoService) { }
  toDoChanged(userString: string) {
    this.userTask = userString;
  }
  onButtonAdd(userString: string) {
    this.textFromButton = userString;
    this.toDos.push({
      id: 3,
      title: this.textFromButton,
      completed: false
    });
    console.log(this.toDos)
  }
  ngOnInit() {
    this.toDos = this._toDoService.getToDos()
  }

}
