import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public usenName:string;
  constructor(private userService: UserService) { }
  public user;
  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    })
  }
  logOut(){
    this.userService.logOut();
  }

}
