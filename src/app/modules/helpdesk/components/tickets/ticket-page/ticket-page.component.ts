import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Ticket} from '../../../models/ticket';
import {MatDialog} from '@angular/material';
import {TicketService} from '../../../services/ticket.service';
import {ActivatedRoute} from '@angular/router';
import {async} from "q";

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
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.get(id).subscribe(t => this.ticketSubject.next(t));
  }

}
