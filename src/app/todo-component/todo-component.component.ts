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
  toDosFirebase: Observable<ToDoInterface[]>;
  constructor(private _toDoService: ToDoService) { }
  toDoChanged(userString: string) {
    this.userTask = userString;
  }
  onButtonAdd(userString: string) {
    this.textFromButton = userString;
  }
  //  getToDo(){
  //   //   this._toDoService.getToDosFirebase().subscribe(items => {
  //   //     this.toDosFirebase = items;
  //   //     console.log(items);
  //   //   });
  //   // }
  ngOnInit() {
    // this.getToDo()
  }

}
