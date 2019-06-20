import {NgModule} from '@angular/core';
import {AuthModule} from './auth/auth.module';
import {StorageService} from './storage/storage.service';
import {UserService} from './user/user.service';
import {TicketCategoriesService} from './ticket-attributes/ticket-category/ticket-categories.service';
import {TicketPrioritiesService} from './ticket-attributes/ticket-priority/ticket-priorities.service';
import {TicketStatusesService} from './ticket-attributes/ticket-status/ticket-statuses.service';

@NgModule({
  imports: [AuthModule],
  providers: [
    StorageService,
    UserService,
    TicketStatusesService,
    TicketCategoriesService,
    TicketPrioritiesService,
  ]
})
export class CommonModule {}
