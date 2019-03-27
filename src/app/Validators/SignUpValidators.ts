import {FormControl, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";
import {SignUpValidatorInterface} from "../SignUpValidatorInterface";

export const signUpValidators = {
  repeatPassword: function (group: FormGroup) {
    if (group.controls['password'].value === group.controls['repeatPassword'].value) {
      return null
    }else {
      return {message: 'Passwords not equal'}
    }
  }
};
