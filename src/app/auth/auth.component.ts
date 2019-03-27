import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInterface} from "../userInterface";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material';
import {ResetEmailPopUpComponent} from '../reset-email-pop-up/reset-email-pop-up.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private userAuthFormGroup: FormGroup;
  private messageSend: boolean = false;
  public user: UserInterface;
  constructor(private userService: UserService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    if (localStorage.user){
      this.router.navigate(['/toDoList'])
    }
    this.userAuthFormGroup = new FormGroup({
      email: new FormControl('',[Validators.required,
        Validators.email]),
      password: new FormControl('',[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)])
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
  forgotPassClick(){
    const dialogRef = this.dialog.open(ResetEmailPopUpComponent,{
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => this.messageSend = result)
  }
  signInWithGoogle(){
  this.userService.googleSingIn()
  }
}
