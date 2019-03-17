import {Component, Input, OnInit} from '@angular/core';
import {ToDoService} from "../to-do-service.service";

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent implements OnInit {
  @Input() deleteIndex:number;
  constructor(private _toDoService:ToDoService) { }
  textButtonClick(index){
    this._toDoService.deleteToDos(index);
  }
  ngOnInit() {
  }

}
