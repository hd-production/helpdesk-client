import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpdeskComponent} from './helpdesk.component';
import {TicketsComponent} from './components/tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: HelpdeskComponent,
    children: [
      { path: '', redirectTo: 'tickets' },
      { path: 'tickets', component: TicketsComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
