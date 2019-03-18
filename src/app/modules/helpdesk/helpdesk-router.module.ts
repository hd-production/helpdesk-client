import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpdeskComponent} from './helpdesk.component';

const routes: Routes = [
  { path: '', component: HelpdeskComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HelpdeskRoutingrModule { }
