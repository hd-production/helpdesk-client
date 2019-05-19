import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TicketAttribute} from '../models/ticket-attribute';

export abstract class TicketAttributeService {
  protected http: HttpClient;

  public get(): Observable<TicketAttribute[]> {
    return this.http.get(this.getUri()) as Observable<TicketAttribute[]>;
  }

  public create(data: TicketAttribute): Observable<TicketAttribute> {
    return this.http.post(this.getUri(), data) as Observable<TicketAttribute>;
  }

  public update(id: number, data: TicketAttribute): Observable<TicketAttribute> {
    return this.http.put(`${this.getUri()}/${id}`, data) as Observable<TicketAttribute>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.getUri()}/${id}`) as Observable<unknown>;
  }

  protected abstract getUri(): string;
}
