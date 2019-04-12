import {Component, Input, OnInit} from '@angular/core';
import {TicketListItem, TicketsListDataSource} from "../tickets-list/tickets-list-datasource";
import {Observable, Subject} from "rxjs";
import {TicketPageDataSource} from "./ticket-page-datasource";
import {Ticket} from "../../../models/ticket";
import {MatDialog} from "@angular/material";
import {TicketService} from "../../../services/ticket.service";

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {

  private ticketSubject = new Subject<Ticket>();
  public ticketObservable = this.ticketSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticketService.get(id).subscribe(t => this.ticketSubject.next(t))
  }

}
