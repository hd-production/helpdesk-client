import {Component, Input, OnInit} from '@angular/core';
import {TicketStatusesService} from '../../../../../../../common/ticket-attributes/ticket-status/ticket-statuses.service';
import {TicketStatus} from '../../../../../../../common/ticket-attributes/ticket-status/ticket-status';

@Component({
  selector: 'app-status-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.scss']
})
export class StatusSelectComponent implements OnInit {

  @Input()
  public predefinedStatusId: number;
  public ticketStatuses: TicketStatus[];

  constructor(
    private readonly ticketStatusService: TicketStatusesService
  ) { }

  ngOnInit() {
    this.ticketStatusService.get()
      .subscribe(ts => this.ticketStatuses = ts);
  }

}
