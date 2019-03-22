import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInterface} from "../userInterface";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private userAuthFormGroup: FormGroup;

  public user: UserInterface;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (localStorage.user){
      this.router.navigate(['/toDoList'])
    }
    this.userAuthFormGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.minLength(6),Validators.required])
    });
    this.userAuthFormGroup.valueChanges.subscribe(value => {
      this.user = value;
    });
    this.userService.afAuth.auth.onAuthStateChanged(user => {
      if (user){
        localStorage.user = JSON.stringify(user);
      }
      return !!user;
    })
  }
  signInBtnClick(user){
    this.userService.logIn(user.email,user.password);
  }
}
