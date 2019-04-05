import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
