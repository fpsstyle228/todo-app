import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInterface} from "../userInterface";
import {UserService} from "../user.service";
import {UserSignUpInterface} from "../userSignUpInterface";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
public userSignUpFormGroup:FormGroup;
public userSignUp:UserSignUpInterface;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSignUpFormGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      repeatPassword: new FormControl('',[Validators.required]),
    });
    this.userSignUpFormGroup.valueChanges.subscribe(user => {
      delete user.repeatPassword;
      this.userSignUp = user;
    })
  }
  signUpClick(user):void{
    this.userService.signUp(user.email,user.password,user)
  }
}
