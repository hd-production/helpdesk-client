import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {TicketAttributeService} from '../ticket-attribute.service';

@Injectable()
export class TicketPrioritiesService extends TicketAttributeService {
  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  protected getUri() {
    return `${environment.api.getUrl()}/ticket-priorities`;
  }
}
