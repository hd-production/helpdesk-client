import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuardService] },
  { path: 'helpdesk', loadChildren: './modules/helpdesk/helpdesk.module#HelpdeskModule', canLoad: [AuthGuardService] },
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
