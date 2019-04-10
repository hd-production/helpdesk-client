import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskComponent } from './helpdesk.component';
import {HelpdeskRoutingModule} from './helpdesk-router.module';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from "@angular/forms";
import {TicketsListComponent} from "./components/tickets/tickets-list/tickets-list.component";
import {TicketsComponent} from "./components/tickets/tickets.component";

@NgModule({
  declarations: [HelpdeskComponent, TicketsListComponent, TicketsComponent],
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
  ]
})
export class HelpdeskModule { }
