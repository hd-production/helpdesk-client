import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TicketCategory} from "../../models/ticket-category";


@Injectable()
export class TicketCategoriesListDataSource extends DataSource<TicketCategory> {

  constructor(
    private categoriesEmitter: Observable<TicketCategory[]>
  ) {
    super();
  }

  public connect(): Observable<TicketCategory[]> {
    return this.categoriesEmitter;
  }

  public disconnect() {}

}
