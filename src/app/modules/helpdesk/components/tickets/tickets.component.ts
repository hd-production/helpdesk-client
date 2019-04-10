import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {Ticket} from "../../models/ticket";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  private ticketsSubject = new Subject<Ticket[]>();
  public ticketsObservable = this.ticketsSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.ticketService.find()
      .subscribe(projects => this.ticketsSubject.next(projects));
  }

}
