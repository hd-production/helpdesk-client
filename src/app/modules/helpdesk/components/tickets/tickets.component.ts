import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatDialog} from '@angular/material';
import {TicketService} from "../../services/ticket.service";
import {TicketListItem} from "./tickets-list/tickets-list-datasource";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  private ticketsSubject = new Subject<TicketListItem[]>();
  public ticketsObservable = this.ticketsSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.ticketService.find()
      .subscribe(tickets => this.ticketsSubject.next(tickets));
  }

}
