import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../..//environments/environment';
import {Ticket} from "../models/ticket";
import {TicketListItem} from "../components/tickets/tickets-list/tickets-list-datasource";

const TICKET_URL = `${environment.api.getUrl()}/tickets/admin`;

@Injectable()
export class TicketService {
  constructor(
    private http: HttpClient
  ) {}

  public find(): Observable<TicketListItem[]> {
    return this.http.get(TICKET_URL) as Observable<TicketListItem[]>;
  }

  public get(id: number): Observable<Ticket> {
    return this.http.get(`${TICKET_URL}/${id}`) as Observable<Ticket>;
  }

  public create(ticket: Ticket): Observable<Ticket> {
    return this.http.post(TICKET_URL, Ticket) as Observable<Ticket>;
  }

  public update(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put(`${TICKET_URL}/${id}`, ticket) as Observable<Ticket>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${TICKET_URL}/${id}`) as Observable<unknown>;
  }
}
