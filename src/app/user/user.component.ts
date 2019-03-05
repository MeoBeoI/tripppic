import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';


@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }

}