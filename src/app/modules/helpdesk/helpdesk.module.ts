import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskComponent } from './helpdesk.component';
import {HelpdeskRoutingModule} from './helpdesk-router.module';

@NgModule({
  declarations: [HelpdeskComponent],
  imports: [
    CommonModule,
    HelpdeskRoutingModule
  ]
})
export class HelpdeskModule { }
