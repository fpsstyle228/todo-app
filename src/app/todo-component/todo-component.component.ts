import { Component, OnInit } from '@angular/core';
import {ToDoInterface} from '../ToDoInterface';
import {ToDoService} from "../to-do-service.service";
import {Observable} from "rxjs";

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
  }
  ngOnInit() {
   // this._toDoService.getToDos();
   // this.toDos = this._toDoService.ToDo
  }

}
