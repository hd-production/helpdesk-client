import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './common/auth/auth.service';
import {StorageService} from './common/storage/storage.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './common/auth/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TicketService} from './helpdesk/services/ticket.service';
import {AuthGuardService} from './common/auth/auth-guard.service';
import {UserService} from './common/user/user.service';
import {CommonModule} from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
