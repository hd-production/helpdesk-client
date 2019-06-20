import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../../../models/ticket';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit {

  @Input()
  public ticket: Ticket;

  ngOnInit() {
  }
}
