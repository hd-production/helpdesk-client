import { Component, OnInit } from '@angular/core';
import {TicketStatusesService} from '../../../common/ticket-attributes/ticket-status/ticket-statuses.service';
import {TicketCategoriesService} from '../../../common/ticket-attributes/ticket-category/ticket-categories.service';
import {TicketPrioritiesService} from '../../../common/ticket-attributes/ticket-priority/ticket-priorities.service';
import {UserModel} from '../../../common/user/user.model';
import {UserService} from '../../../common/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public user: UserModel;

  constructor(
    public ticketStatusesService: TicketStatusesService,
    public ticketCategoriesService: TicketCategoriesService,
    public ticketPrioritiesService: TicketPrioritiesService,
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.user = user;
      });
  }
}
