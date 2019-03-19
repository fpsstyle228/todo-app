import {Component, Input, OnInit} from '@angular/core';
import {ToDoService} from "../to-do-service.service";

@Component({
  selector: 'app-app-checbox',
  templateUrl: './app-checbox.component.html',
  styleUrls: ['./app-checbox.component.css']
})
export class AppChecboxComponent implements OnInit {
  @Input() checkIndex: string;
  @Input() completed: boolean;
  constructor(private _toDoService: ToDoService) { }
  appCheckBoxChange(isChecked: boolean) {
    console.log(isChecked);
    this._toDoService.changeToDos(this.checkIndex,'completed', isChecked)
  }
  ngOnInit() {
  }

}
