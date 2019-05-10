import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TicketStatus} from "../models/ticket-status";
import {IdNameTicketAttribute} from "../models/id-name-ticket-attribute";

const STATUSES_URL = `${environment.api.getUrl()}/ticket-statuses`;

@Injectable()
export class IdNameTicketAttributeService {
  constructor(
    private http: HttpClient
  ) {}

  protected getUri(): string {
    return "";
  }

  public get(): Observable<IdNameTicketAttribute[]> {
    return this.http.get(this.getUri()) as Observable<IdNameTicketAttribute[]>;
  }

  public create(status: IdNameTicketAttribute): Observable<IdNameTicketAttribute> {
    return this.http.post(this.getUri(), IdNameTicketAttribute) as Observable<IdNameTicketAttribute>;
  }

  public update(id: number, status: IdNameTicketAttribute): Observable<IdNameTicketAttribute> {
    return this.http.put(`${this.getUri()}/${id}`, status) as Observable<IdNameTicketAttribute>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.getUri()}/${id}`) as Observable<unknown>;
  }
}
