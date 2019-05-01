import {Injectable} from '@angular/core';
import {LoginForm} from './login/login-form';
import {Md5} from 'ts-md5';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map, switchMap} from 'rxjs/operators';
import {StorageService} from '../storage/storage.service';
import {LoginResponse} from './login/login-response';
import {of} from 'rxjs';
import * as jwtDecode from 'jwt-decode';

const SESSIONS_URL = `${environment.api.getUrl()}/sessions`;
const MILLISECONDS_IN_SECOND = 1000;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public login(loginForm: LoginForm): Observable<void> {
    const loginData = this.hashPassword(loginForm);
    return this.http.post(SESSIONS_URL, loginData).pipe(
      map((res: LoginResponse) => {
        this.storageService.store('token', res.token);
        this.storageService.store('refreshToken', res.refreshToken);
        return;
      })
    );
  }

  public isAuthorized(): boolean {
    const token = this.storageService.get('token');
    if (!token) {
      return false;
    }
    const decodedJwt = jwtDecode(token) as {exp: number};
    return (new Date()).getTime() / MILLISECONDS_IN_SECOND < decodedJwt.exp;
  }

  public refreshToken(): Observable<string> {
    const refreshToken = this.storageService.get('refreshToken');
    return this.http.put(`${SESSIONS_URL}/refresh`, {refreshToken})
      .pipe(
        switchMap((res: LoginResponse) => {
          this.storageService.store('token', res.token);
          this.storageService.store('refreshToken', res.refreshToken);
          return of(res.token);
        })
      );
  }

  private hashPassword(form: LoginForm) {
    return {
      ...form,
      password: undefined,
      pwdHash: Md5.hashStr(form.password)
    };
  }
}
