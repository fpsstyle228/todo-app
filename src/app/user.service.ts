import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {UserSignUpInterface} from './userSignUpInterface';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UserCollectionName = 'User';
  private UserCollection: AngularFirestoreCollection = this.afs.collection(this.UserCollectionName);
  constructor(public afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {}
  logIn(email, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(user => {
        this.router.navigate(['/toDoList']);
      }).catch(err => console.log(err));
  }
  logOut(): void {
    this.afAuth.auth.signOut().then(user => {
      localStorage.removeItem('user');
      this.router.navigate(['/auth']);
      console.log('you log out');
    })
      .catch(err => console.log(err));
  }
  signUp(email, pass, objUser: UserSignUpInterface) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(user => {
        this.UserCollection.doc(user.user.uid).set(objUser);
        this.router.navigate(['./auth']);
      });
  }
  sendResetPassEmail(email){
    return  this.afAuth.auth.sendPasswordResetEmail(email)
  }
  googleSingIn(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(data => this.router.navigate(['./toDoList']));
  }
  sendVerifyEmail(){
    return  this.afAuth.auth.currentUser.sendEmailVerification()
  }
  getCurrentUser(){
    return this.afAuth.auth.currentUser
  }
}
