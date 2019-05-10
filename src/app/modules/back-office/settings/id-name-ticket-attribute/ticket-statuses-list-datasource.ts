import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TicketStatus} from "../../models/ticket-status";


@Injectable()
export class TicketStatusesListDataSource extends DataSource<TicketStatus> {

  constructor(
    private statusesEmitter: Observable<TicketStatus[]>
  ) {
    super();
  }

  public connect(): Observable<TicketStatus[]> {
    return this.statusesEmitter;
  }

  public disconnect() {}

}
