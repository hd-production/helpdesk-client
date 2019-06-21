import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatPaginatorModule, MatSelectModule,
  MatSortModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BackOfficeRoutingModule} from './back-office-routing-module';
import {TicketAttributeListComponent} from './settings/ticket-attribute-settings/ticket-attribute-list/ticket-attribute-list.component';
import {TicketAttributeSettingsComponent} from './settings/ticket-attribute-settings/ticket-attribute-settings.component';
import { AddTicketAttributeComponent } from './settings/ticket-attribute-settings/add-ticket-attribute/add-ticket-attribute.component';
import { InviteUserComponent } from './settings/invite-user/invite-user.component';
import {InviteUserService} from './settings/invite-user/invite-user.service';


@NgModule({
  declarations: [
    SettingsComponent, TicketAttributeListComponent, TicketAttributeSettingsComponent, AddTicketAttributeComponent, InviteUserComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BackOfficeRoutingModule,
    FormsModule,
    MatSelectModule
  ],
  entryComponents: [
    AddTicketAttributeComponent
  ],
  providers: [
    InviteUserService
  ]

})
export class BackOfficeModule { }
