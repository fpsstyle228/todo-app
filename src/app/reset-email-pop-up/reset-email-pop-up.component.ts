import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-reset-email-pop-up',
  templateUrl: './reset-email-pop-up.component.html',
  styleUrls: ['./reset-email-pop-up.component.css']
})
export class ResetEmailPopUpComponent implements OnInit {
  public email: FormControl;
  private sendEmail: string;
  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<ResetEmailPopUpComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.email.valueChanges.subscribe(email => this.sendEmail = email);
  }
  onSendClick(email){
    this.userService.sendResetPassEmail(email)
      .then(() => this.dialogRef.close(true))
      .catch(err => console.log(err));
  }

}
