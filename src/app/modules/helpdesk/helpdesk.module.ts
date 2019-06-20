import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskComponent } from './helpdesk.component';
import {HelpdeskRoutingModule} from './helpdesk-router.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TicketsListComponent} from './components/tickets/tickets-list/tickets-list.component';
import {TicketsComponent} from './components/tickets/tickets.component';
import {
  MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCardModule, MatFormFieldModule,
  MatInputModule,
  MatToolbarModule, MatSelectModule
} from '@angular/material';
import {TicketListItemComponent} from './components/tickets/tickets-list/ticket-list-item/ticket-list-item.component';
import {TicketService} from './services/ticket.service';
import {StatusSelectComponent} from './components/tickets/tickets-list/ticket-list-item/status-select/status-select.component';

@NgModule({
  declarations: [
    HelpdeskComponent,
    TicketsListComponent,
    TicketsComponent,
    TicketListItemComponent,
    StatusSelectComponent,
  ],
  imports: [
    CommonModule,
    HelpdeskRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [
    TicketService
  ]
})
export class HelpdeskModule { }
