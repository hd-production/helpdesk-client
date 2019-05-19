import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {TicketStatusesService} from "../services/ticket-statuses.service";
import {TicketCategoriesService} from "../services/ticket-categories.service";
import {TicketPrioritiesService} from "../services/ticket-priorities.service";

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
