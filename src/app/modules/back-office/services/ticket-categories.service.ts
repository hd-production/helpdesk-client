import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TicketCategory} from "../models/ticket-category";

const STATUSES_URL = `${environment.api.getUrl()}/ticket-categories`;

@Injectable()
export class TicketCategoriesService {
  constructor(
    private http: HttpClient
  ) {}

  public get(): Observable<TicketCategory[]> {
    return this.http.get(STATUSES_URL) as Observable<TicketCategory[]>;
  }

  public create(status: TicketCategory): Observable<TicketCategory> {
    return this.http.post(STATUSES_URL, TicketCategory) as Observable<TicketCategory>;
  }

  public update(id: number, status: TicketCategory): Observable<TicketCategory> {
    return this.http.put(`${STATUSES_URL}/${id}`, status) as Observable<TicketCategory>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${STATUSES_URL}/${id}`) as Observable<unknown>;
  }
}
