import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface TicketListItem {
  id: number;
  issue: string;
  assigneeId? : number;
}

@Injectable()
export class TicketsListDataSource extends DataSource<TicketListItem> {

  constructor(
    private ticketsEmitter: Observable<TicketListItem[]>
  ) {
    super();
  }

  public connect(): Observable<TicketListItem[]> {
    return this.ticketsEmitter;
  }

  public disconnect() {}

}
