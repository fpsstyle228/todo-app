import {Component, Input, OnInit} from '@angular/core';
import {ToDoService} from '../to-do-service.service';
import {ToDoInterface} from '../ToDoInterface';
import {ToDoIdInterface} from '../ToDoIdInterface';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fadeIn',[
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(1500)
      ])])
  ]
})
export class TodoListComponent implements OnInit {
  toDoList: ToDoInterface[];
  constructor(private _toDoService: ToDoService) {}
   getToDoList() {
    this._toDoService.getToDos().subscribe((a: ToDoIdInterface[])  => {
        this.toDoList = a;
      });
  }
   ngOnInit() {
    this.getToDoList();
  }
}
