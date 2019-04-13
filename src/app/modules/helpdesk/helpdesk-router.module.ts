import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpdeskComponent} from './helpdesk.component';
import {TicketsComponent} from "./components/tickets/tickets.component";
import {TicketPageComponent} from "./components/tickets/ticket-page/ticket-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'tickets' },
  { path: 'tickets', component: TicketsComponent },
  { path: 'tickets/:id/page', component: TicketPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
