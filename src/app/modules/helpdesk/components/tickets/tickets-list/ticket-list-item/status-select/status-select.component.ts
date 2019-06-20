import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TicketStatusesService} from '../../../../../../../common/ticket-attributes/ticket-status/ticket-statuses.service';
import {TicketStatus} from '../../../../../../../common/ticket-attributes/ticket-status/ticket-status';

@Component({
  selector: 'app-status-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.scss']
})
export class StatusSelectComponent implements OnInit {

  @Input()
  public statusId: number;

  @Output()
  public statusIdChange: EventEmitter<number> = new EventEmitter();

  public ticketStatuses: TicketStatus[];

  constructor(
    private readonly ticketStatusService: TicketStatusesService
  ) { }

  ngOnInit() {
    this.ticketStatusService.get()
      .subscribe(ts => this.ticketStatuses = ts);
  }

  public statusChange(newStatusId) {
    this.statusIdChange.emit(newStatusId);
  }

}
