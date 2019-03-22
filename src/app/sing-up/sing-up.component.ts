import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInterface} from "../userInterface";
import {UserService} from "../user.service";
import {UserSignUpInterface} from "../userSignUpInterface";
import {signUpValidators} from "../Validators/SignUpValidators";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
public userSignUpFormGroup:FormGroup;
public userSignUp:UserSignUpInterface = null;
public userExit:string;
  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userSignUpFormGroup = this.fb.group({
      email: ['',
        [Validators.required,
        Validators.email]],
      username: ['',
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18),
        Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      gender: ['',
        [Validators.required]],
      phone: ['',
        [Validators.required,
        Validators.pattern('^((8|\\+38)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,9}$')]],
      country: ['',
        [Validators.required]],
      passwords: this.fb.group({
        password: ['',
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)]],
        repeatPassword: ['',
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)]]
      },{ validators: [signUpValidators.repeatPassword]}),
    });
    this.userSignUpFormGroup.valueChanges.subscribe(user => {
      delete user.repeatPassword;
      this.userSignUp = user;
    });
  }
  signUpClick(user){
    if (this.userSignUpFormGroup.invalid){
      const controls = this.userSignUpFormGroup.controls;
      Object.keys(controls).forEach( control => {
        if (controls[control].invalid){
          controls[control].markAsTouched();
        }
      });
      if (controls['passwords'].invalid){
        controls['passwords'].get('password').markAsTouched();
        controls['passwords'].get('repeatPassword').markAsTouched();
    }
      return;
    }
    console.log(user);
    this.userService.signUp(user.email,user.passwords.password,user)
      .catch( err => {
      this.userExit = err.message;
    })
  }
}
