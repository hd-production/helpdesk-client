import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './modules/dashboard.module#DashboardModule' },
  { path: 'helpdesk', loadChildren: './modules/helpdesk.module#HelpdeskModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
