import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../../../models/ticket';
import {TicketService} from '../../../../services/ticket.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit {

  @Input()
  public ticket: Ticket;

  constructor(
    private readonly ticketService: TicketService
  ) {}

  ngOnInit() {
  }

  public statusUpdated(newStatusId) {
    this.ticket.statusId = newStatusId;
    this.ticketService.update(this.ticket.id, this.ticket)
      .subscribe(() => {});
  }

  public sendComment(comment) {
    this.ticketService.addComment(this.ticket.id, comment).pipe(
      switchMap(() => this.ticketService.get(this.ticket.id))
    )
      .subscribe(ticket => this.ticket = ticket);
  }
}
