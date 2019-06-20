import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../common/auth/auth.service";
import {UserService} from "../../common/user/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userIsAdmin :boolean;
  public userIsSupportAgent :boolean;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userIsAdmin = this.userService.hasPermission("admin");
    this.userIsSupportAgent = this.userService.hasPermission("support-agent");
  }

  public toHelpdesk(): void {
    this.router.navigate(['/helpdesk'])
  }

  public toBackOffice(): void {
    this.router.navigate(['/back-office'])
  }
}
