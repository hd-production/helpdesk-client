import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashbordRoutingrModule} from './dashboard-router.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashbordRoutingrModule,
    CommonModule
  ]
})
export class DashboardModule { }
