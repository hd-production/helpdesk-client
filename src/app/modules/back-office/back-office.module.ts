import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import {
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule, MatToolbarModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {IdNameTicketSettingsComponent} from "./settings/id-name-ticket-settings/id-name-ticket-settings.component";
import {BackOfficeRoutingModule} from "./back-office-routing-module";


@NgModule({
  declarations: [SettingsComponent, IdNameTicketSettingsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
