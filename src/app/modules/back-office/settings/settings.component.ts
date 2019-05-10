import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {MatDialog} from "@angular/material";
import {TicketStatus} from "../models/ticket-status";
import {TicketStatusesService} from "../services/ticket-statuses.service";
import {TicketPriority} from "../models/ticket-priority";
import {TicketCategoriesService} from "../services/ticket-categories.service";
import {TicketCategory} from "../models/ticket-category";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private ticketStatusesSubject = new Subject<TicketStatus[]>();
  public ticketStatusesObservable = this.ticketStatusesSubject.asObservable();
  private ticketCategoriesSubject = new Subject<TicketPriority[]>();
  public ticketPrioritiesObservable = this.ticketCategoriesSubject.asObservable();
  private ticketCategoriesSubject = new Subject<TicketCategory[]>();
  public ticketCategoriesObservable = this.ticketCategoriesSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private ticketStatusesService: TicketStatusesService,
    private ticketCategoriesService: TicketCategoriesService
  ) { }

  ngOnInit() {
    this.ticketStatusesService.get()
      .subscribe(statuses => this.ticketStatusesSubject.next(statuses));
    this.ticketCategoriesService.get()
      .subscribe(statuses => this.ticketCategoriesSubject.next(statuses));
  }

}
