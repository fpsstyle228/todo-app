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
  private ToDoCollectionName: string = "ToDo";
  private ToDoCollection: AngularFirestoreCollection<ToDoInterface> = this.firestore.collection<ToDoInterface>(this.ToDoCollectionName);
  static ToDo: ToDoIdInterface[];
  constructor(private firestore: AngularFirestore) {

  }
   getToDos():Observable<ToDoIdInterface[]>{
    return this.ToDoCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data() as ToDoInterface;
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )
  }
  changeToDos(index,property,value){
    this.ToDoCollection.doc(index).update({[property] : value})
  }
  deleteToDos(index){
    this.ToDoCollection.doc(index).delete();
  }
  addToDos(obj: ToDoInterface){
    this.ToDoCollection.add(obj);
  }
}
