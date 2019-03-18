import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskComponent } from './helpdesk.component';
import {HelpdeskRoutingrModule} from './helpdesk-router.module';

@NgModule({
  declarations: [HelpdeskComponent],
  imports: [
    CommonModule,
    HelpdeskRoutingrModule
  ]
})
export class HelpdeskModule { }
