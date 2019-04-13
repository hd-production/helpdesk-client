import { Component, OnInit } from '@angular/core';
import {createRegisterForm} from './register.form';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {LoginForm} from '../models/login-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = createRegisterForm();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public submit() {
    this.authService.register(this.registerForm.value)
      .pipe(
        switchMap(() => this.authService.login(this.getLoginForm()))
      )
      .subscribe(
        () => this.router.navigate(['/dashboard'])
      );
  }

  private getLoginForm(): LoginForm {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    return { email, password };
  }
}
