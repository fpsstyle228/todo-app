import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {UserSignUpInterface} from "./userSignUpInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UserCollectionName: string = 'User';
  private UserCollection: AngularFirestoreCollection = this.afs.collection(this.UserCollectionName);
  constructor(public afAuth:AngularFireAuth,
              private afs:AngularFirestore,
              private router: Router) {}
  logIn(email,pass){
    this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(user => {
        console.log('user service logIN');
        this.router.navigate(['/toDoList'])
      }).catch(err => console.log(err));
  }
  logOut(): void{
    this.afAuth.auth.signOut().then(user => {
      localStorage.removeItem('user');
      this.router.navigate(['/auth']);
      console.log('you log out');
    })
      .catch(err => console.log(err));
  }
  signUp(email,pass,objUser: UserSignUpInterface){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(user => {
        this.UserCollection.doc(user.user.uid).set(objUser);
      })
      // .catch(err => console.log(err))
  }
  getUser():Observable<any>{
    console.log(JSON.parse(localStorage.getItem('user')).uid);
    return  this.UserCollection.doc(JSON.parse(localStorage.getItem('user')).uid).valueChanges()
  }
}
