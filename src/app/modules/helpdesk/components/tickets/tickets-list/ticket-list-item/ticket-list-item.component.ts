import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../../../models/ticket';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent implements OnInit {

  @Input()
  public ticket: Ticket;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public edit(id: number) : void{
    this.router.navigate(['helpdesk/tickets/' + id + '/page'])
  }
}
