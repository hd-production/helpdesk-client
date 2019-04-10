import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Ticket} from "../../../models/ticket";

export interface TicketListItem {
  id: number;
  issue: string;
  assigneeId? : number;
}

@Injectable()
export class TicketsListDataSource extends DataSource<TicketListItem> {

  constructor(
    private ticketsEmitter: Observable<Ticket[]>
  ) {
    super();
  }

  public connect(): Observable<TicketListItem[]> {
    return this.ticketsEmitter
      .pipe(
        map((tickets: Ticket[]) => {
          return tickets.map(project => this.mapToListItem(project));
        })
      );
  }

  public disconnect() {}

  private mapToListItem(ticket: Ticket): TicketListItem {
    return {
      id: ticket.id,
      issue: ticket.issue,
      assigneeId : ticket.assigneeId
    };
  }

}
