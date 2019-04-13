import {Component, Input, OnInit} from '@angular/core';
import {TicketListItem, TicketsListDataSource} from './tickets-list-datasource';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  dataSource: TicketsListDataSource;
  @Input()
  public ticketsObservable: Observable<TicketListItem[]>;

  constructor() {}

  displayedColumns = ['id', 'issue'];

  ngOnInit() {
    this.dataSource = new TicketsListDataSource(this.ticketsObservable);
  }
}
