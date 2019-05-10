import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IdNameTicketAttribute} from "../models/id-name-ticket-attribute";


@Injectable()
export class IdNameTicketAttributeListDataSource extends DataSource<IdNameTicketAttribute> {

  constructor(
    private categoriesEmitter: Observable<IdNameTicketAttribute[]>
  ) {
    super();
  }

  public connect(): Observable<IdNameTicketAttribute[]> {
    return this.categoriesEmitter;
  }

  public disconnect() {}

}
