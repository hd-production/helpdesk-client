import {Component, Input, OnInit} from '@angular/core';
import {TicketsListDataSource} from "./tickets-list-datasource";
import {Observable} from "rxjs";
import {Ticket} from "../../../models/ticket";

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  dataSource: TicketsListDataSource;
  @Input()
  public ticketsObservable: Observable<Ticket[]>;

  constructor() {}

  displayedColumns = ['id', 'issue'];

  ngOnInit() {
    this.dataSource = new TicketsListDataSource(this.ticketsObservable);
  }
}
