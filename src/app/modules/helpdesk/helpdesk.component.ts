import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../common/user/user.model';
import {UserService} from '../../common/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.scss']
})
export class HelpdeskComponent implements OnInit {

  public user: UserModel;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
