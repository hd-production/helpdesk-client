import {Component, Input} from '@angular/core';
import {Ticket} from '../../../models/ticket';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent {

  @Input()
  public tickets: Ticket[];

  constructor() {}
}
