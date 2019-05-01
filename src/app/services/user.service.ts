import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

const USERS_URL = `${environment.api.getUrl()}/users`;

@Injectable()
export class UserService {
  constructor(
    private readonly httpClient: HttpClient
  ) {}

  public getCurrentUser(): Observable<UserModel> {
    return this.httpClient.get(`${USERS_URL}/me`) as Observable<UserModel>;
  }
}
