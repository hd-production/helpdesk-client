import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'helpdesk', loadChildren: './modules/helpdesk/helpdesk.module#HelpdeskModule' },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
