import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {TicketAttributeListDataSource} from "./ticket-attribute-list-data-source.service";
import {TicketAttribute} from "../../../models/ticket-attribute";

@Component({
  selector: 'app-ticket-attribute-list',
  templateUrl: './ticket-attribute-list.component.html',
  styleUrls: ['./ticket-attribute-list.component.scss']
})
export class TicketAttributeListComponent implements OnInit {
  dataSource: TicketAttributeListDataSource;
  @Input() public observable: Observable<TicketAttribute[]>;
  @Output() itemDeleted: EventEmitter<number> = new EventEmitter();

  constructor() {}


  displayedColumns = ['id', 'name', 'options'];

  ngOnInit() {
    this.dataSource = new TicketAttributeListDataSource(this.observable);
  }

  public removeItem(id: number): void{
    this.itemDeleted.emit(id);
  }

}
