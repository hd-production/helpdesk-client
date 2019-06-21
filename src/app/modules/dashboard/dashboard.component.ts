import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../common/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

    if (this.userService.hasPermission('admin')) {
      this.router.navigate(['/back-office']);
    }

    if (this.userService.hasPermission('support-agent')) {
      this.router.navigate(['/helpdesk']);
    }
  }
}
