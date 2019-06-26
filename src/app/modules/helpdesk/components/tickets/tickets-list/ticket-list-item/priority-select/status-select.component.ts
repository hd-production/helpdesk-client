import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TicketStatusesService} from '../../../../../../../common/ticket-attributes/ticket-status/ticket-statuses.service';
import {TicketStatus} from '../../../../../../../common/ticket-attributes/ticket-status/ticket-status';
import {TicketPrioritiesService} from '../../../../../../../common/ticket-attributes/ticket-priority/ticket-priorities.service';

@Component({
  selector: 'app-priority-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.scss']
})
export class ProiritySelectComponent implements OnInit {

  @Input()
  public priorityId: number;

  @Output()
  public priorityIdChange: EventEmitter<number> = new EventEmitter();

  public ticketStatuses: TicketStatus[];

  constructor(
    private readonly ticketPriorityService: TicketPrioritiesService
  ) { }

  ngOnInit() {
    this.ticketPriorityService.get()
      .subscribe(ts => this.ticketStatuses = ts);
  }

  public statusChange(newPriorityId) {
    this.priorityIdChange.emit(newPriorityId);
  }

}
