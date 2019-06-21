import { Component, OnInit } from '@angular/core';
import {InviteUserService} from './invite-user.service';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {

  public userEmail: string;
  public firstName: string;
  public lastName: string;
  public role = 'admin';

  constructor(
    private readonly inviteUserService: InviteUserService
  ) { }

  ngOnInit() {
  }

  inviteUser() {
    this.inviteUserService.invite({
      email: this.userEmail,
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role
    }).subscribe(() => {
      console.log('user invited ');
    });
  }

}
