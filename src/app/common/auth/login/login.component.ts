import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {createLoginForm} from './login.form';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = createLoginForm();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public toRegistration(): void{
    this.router.navigate(['/register'])
  }

  public submit(): void {
    this.authService.login(this.loginForm.value)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        }
      );
  }
}
