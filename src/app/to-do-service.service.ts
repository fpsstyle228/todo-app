import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

import {ToDoIdInterface} from "./ToDoIdInterface";
import {ToDoInterface} from './ToDoInterface'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public toDoArray:ToDoInterface[] = [
    {
      title: 'Todo one',
      completed: false
    },
    {
      title: 'Todo two',
      completed: false
    },
    {
      title: 'Todo third',
      completed: false
    }
  ];
  private ToDoCollection: AngularFirestoreCollection<ToDoInterface>;
  ToDo: Observable<ToDoIdInterface[]>;
  ToDoCollectionName: string = "ToDo";
  constructor(private readonly firestore: AngularFirestore) {
    this.ToDoCollection = firestore.collection<ToDoInterface>(this.ToDoCollectionName);
    this.ToDo = this.ToDoCollection.snapshotChanges().pipe(
      map(a => {
        const data = a.payload.doc.data() as ToDoInterface; //ERR
        const id = a.payload.doc.id;
        return {id, ...data}
        }
      ));
    console.log(this.ToDo);
  }
  getToDos(){
    return this.toDoArray;
  }
  getToDosFirebase(){

  }
  changeToDos(index,property,value){
    this.toDoArray[index][property] = value;
  }
  deleteToDos(index){
    this.toDoArray.splice(index,1);
  }
  deleteToDosFirebase(index){
    // this.firestore.collection("ToDO").doc(index).delete();
  }
  addToDos(obj: ToDoInterface){
    this.toDoArray.push(obj);
  }
  addToDosFirebase(obj: ToDoInterface){
    return new Promise<any>(((resolve, reject) => {
      this.firestore
        .collection("ToDo")
        .add(obj)
        .then(res => console.log('data send!'), err => reject(err))
    }))
  }
}
