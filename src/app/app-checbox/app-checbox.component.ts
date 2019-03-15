import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoService} from "../to-do-service.service";

@Component({
  selector: 'app-app-checbox',
  templateUrl: './app-checbox.component.html',
  styleUrls: ['./app-checbox.component.css']
})
export class AppChecboxComponent implements OnInit {
  @Input() checkIndex: boolean;
  appCheckBoxChange(isChecked: boolean) {
    this._toDoService.changeToDos(this.checkIndex,'completed',isChecked);
    console.log(this._toDoService.getToDos());
  }
  constructor(private _toDoService: ToDoService) { }

  ngOnInit() {
  }

}
