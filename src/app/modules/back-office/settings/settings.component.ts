import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {TicketStatusesService} from "../../../common/ticket-attributes/ticket-status/ticket-statuses.service";
import {TicketCategoriesService} from "../../../common/ticket-attributes/ticket-category/ticket-categories.service";
import {TicketPrioritiesService} from "../../../common/ticket-attributes/ticket-priority/ticket-priorities.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    public ticketStatusesService: TicketStatusesService,
    public ticketCategoriesService: TicketCategoriesService,
    public ticketPrioritiesService: TicketPrioritiesService,
  ) { }

  ngOnInit() {
  }

}
