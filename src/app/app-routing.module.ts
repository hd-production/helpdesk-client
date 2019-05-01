import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthGuardService} from './common/auth/auth-guard.service';
import {LoginComponent} from './common/auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
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
