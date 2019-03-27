import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public text: string;
  emailVerified: boolean;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.emailVerified = !localStorage.user.emailVerified
    // console.log(this.userService.getCurrentUser());
  }
  verifyEmailCLick(){
    this.userService.sendVerifyEmail()
      .then(() => this.text = 'email was send')
      .catch(err => this.text = String(err))
  }
}
