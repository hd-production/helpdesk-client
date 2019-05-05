import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {MatDialog} from "@angular/material";
import {TicketStatus} from "../models/ticket-status";
import {TicketStatusesService} from "../services/ticket-statuses.service";
import {TicketPriority} from "../models/ticket-priority";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private ticketStatusesSubject = new Subject<TicketStatus[]>();
  public ticketStatusesObservable = this.ticketStatusesSubject.asObservable();
  private ticketPrioritiesSubject = new Subject<TicketPriority[]>();
  public ticketPrioritiesObservable = this.ticketPrioritiesSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private ticketStatusesService: TicketStatusesService
  ) { }

  ngOnInit() {
    this.ticketStatusesService.get()
      .subscribe(statuses => this.ticketStatusesSubject.next(statuses));
  }

}
