import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TicketStatus} from "../../models/ticket-status";
import {TicketStatusesListDataSource} from "./ticket-statuses-list-datasource";

@Component({
  selector: 'app-id-name-ticket-settings',
  templateUrl: './id-name-ticket-settings.component.html',
  styleUrls: ['./id-name-ticket-settings.component.scss']
})
export class IdNameTicketSettingsComponent implements OnInit {
  dataSource: TicketStatusesListDataSource;
  @Input()
  public observable: Observable<TicketStatus[]>;

  constructor() {}

  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TicketStatusesListDataSource(this.observable);
  }

}
