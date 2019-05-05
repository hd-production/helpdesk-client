import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TicketStatus} from "../models/ticket-status";

const STATUSES_URL = `${environment.api.getUrl()}/ticket-statuses`;

@Injectable()
export class TicketStatusesService {
  constructor(
    private http: HttpClient
  ) {}

  public get(): Observable<TicketStatus[]> {
    return this.http.get(STATUSES_URL) as Observable<TicketStatus[]>;
  }

  public create(status: TicketStatus): Observable<TicketStatus> {
    return this.http.post(STATUSES_URL, TicketStatus) as Observable<TicketStatus>;
  }

  public update(id: number, status: TicketStatus): Observable<TicketStatus> {
    return this.http.put(`${STATUSES_URL}/${id}`, status) as Observable<TicketStatus>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${STATUSES_URL}/${id}`) as Observable<unknown>;
  }
}
