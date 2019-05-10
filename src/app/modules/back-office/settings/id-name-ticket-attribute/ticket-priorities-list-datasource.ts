import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TicketPriority} from "../../models/ticket-priority";


@Injectable()
export class TicketPrioritiesListDataSource extends DataSource<TicketPriority> {

  constructor(
    private prioritiesEmmiter: Observable<TicketPriority[]>
  ) {
    super();
  }

  public connect(): Observable<TicketPriority[]> {
    return this.prioritiesEmmiter;
  }

  public disconnect() {}

}
