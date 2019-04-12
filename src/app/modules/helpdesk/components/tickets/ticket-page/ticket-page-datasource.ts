import { DataSource } from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Ticket} from "../../../models/ticket";
@Injectable()
export class TicketPageDataSource extends DataSource<Ticket> {

  constructor(
    private ticketsEmitter: Observable<Ticket>
  ) {
    super();
  }

  public connect(): Observable<Ticket> {
    return this.ticketsEmitter;
  }

  public disconnect() {}

}
