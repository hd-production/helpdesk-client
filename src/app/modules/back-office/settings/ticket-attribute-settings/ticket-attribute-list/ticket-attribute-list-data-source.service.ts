import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TicketAttribute} from "../../../models/ticket-attribute";


@Injectable()
export class TicketAttributeListDataSource extends DataSource<TicketAttribute> {

  constructor(
    private emitter: Observable<TicketAttribute[]>
  ) {
    super();
  }

  public connect(): Observable<TicketAttribute[]> {
    return this.emitter;
  }

  public disconnect() {}

}
