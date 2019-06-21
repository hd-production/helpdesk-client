import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

const USER_INVITE_URL = `${environment.api.getUrl()}/users`;

@Injectable()
export class InviteUserService {
  constructor(
    private readonly http: HttpClient
  ) {}

  public invite(userInvite) {
    return this.http.post(USER_INVITE_URL, userInvite);
  }
}
