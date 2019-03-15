import { Injectable } from '@angular/core';
import {ToDoInterface} from './ToDoInterface'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public toDoArray:ToDoInterface[] = [
    {
      id: 0,
      title: 'Todo one',
      completed: false
    },
    {
      id: 1,
      title: 'Todo two',
      completed: false
    },
    {
      id: 2,
      title: 'Todo third',
      completed: false
    }
  ];
  constructor() { }
  getToDos(){
    return this.toDoArray;
  }
  changeToDos(index,property,value){
    this.toDoArray[index][property] = value;
  }
  setToDos(obj: ToDoInterface){
    this.toDoArray.push(obj);
  }
}
