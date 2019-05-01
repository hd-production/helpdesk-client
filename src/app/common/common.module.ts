import {NgModule} from '@angular/core';
import {AuthModule} from './auth/auth.module';
import {StorageService} from './storage/storage.service';
import {UserService} from './user/user.service';

@NgModule({
  imports: [AuthModule],
  providers: [
    StorageService,
    UserService
  ]
})
export class CommonModule {}
