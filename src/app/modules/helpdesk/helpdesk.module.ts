import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskComponent } from './helpdesk.component';
import {HelpdeskRoutingModule} from './helpdesk-router.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TicketsListComponent} from './components/tickets/tickets-list/tickets-list.component';
import {TicketsComponent} from './components/tickets/tickets.component';
import {TicketPageComponent} from './components/tickets/ticket-page/ticket-page.component';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCardModule, MatFormFieldModule,
  MatInputModule,
  MatToolbarModule} from '@angular/material';
import {TicketListItemComponent} from './components/tickets/tickets-list/ticket-list-item/ticket-list-item.component';
import {TicketService} from './services/ticket.service';

@NgModule({
  declarations: [
    HelpdeskComponent,
    TicketsListComponent,
    TicketsComponent,
    TicketPageComponent,
    TicketListItemComponent
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
    MatToolbarModule
  ],
  providers: [
    TicketService
  ]
})
export class HelpdeskModule { }
