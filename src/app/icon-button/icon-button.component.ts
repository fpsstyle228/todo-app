import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {ToDoService} from "../to-do-service.service";

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() buttonName: string;
  @Input() inputText: string;
  constructor(private _toDoService:ToDoService) { }
  iconButtonClick(inputText: string) {
    const pushObject = {
      title: inputText,
      completed: false
    };
    this._toDoService.addToDos(pushObject);
  }
  ngOnInit() {
  }

}
