import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UserModel} from './user.model';
import {StorageService} from "../storage/storage.service";
import * as jwtDecode from 'jwt-decode';

const USERS_URL = `${environment.api.getUrl()}/users`;

@Injectable()
export class UserService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storageService: StorageService
  ) {}

  public getCurrentUser(): Observable<UserModel> {
    return this.httpClient.get(`${USERS_URL}/me`) as Observable<UserModel>;
  }

  public hasPermission(permission: string): boolean{
    const token = this.storageService.get('token');
    if (!token) {
      return false;
    }
    const decodedJwt = jwtDecode(token) as {permissions: string};
    return decodedJwt.permissions.includes(permission);
  }
}
