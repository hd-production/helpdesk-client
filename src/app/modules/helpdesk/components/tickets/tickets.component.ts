import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {TicketService} from '../../services/ticket.service';
import {Ticket} from '../../models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  public tickets: Ticket[];

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.ticketService.find()
      .subscribe(tickets => {
        this.tickets = tickets;
      });
  }

}
