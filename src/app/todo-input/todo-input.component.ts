import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  tepmTaskInput: string = '';

  @Output() toDoChanged = new EventEmitter<string>();
  toDoChange(inputText: string) {
    this.toDoChanged.emit(inputText);
  }
  constructor() { }

  ngOnInit() {
  }

}
