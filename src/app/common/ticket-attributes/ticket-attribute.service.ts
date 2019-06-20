import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {TicketAttribute} from './ticket-attribute';
import {tap} from 'rxjs/internal/operators/tap';

export abstract class TicketAttributeService {
  protected http: HttpClient;
  protected cache: TicketAttribute[];

  public get(): Observable<TicketAttribute[]> {
    // if (this.cache) {
    //   return of(this.cache);
    // }

    return this.updateCache();
  }

  public create(data: TicketAttribute): Observable<TicketAttribute> {
    return this.http.post(this.getUri(), data).pipe(
      tap(() => this.updateCache())
    ) as Observable<TicketAttribute>;
  }

  public update(id: number, data: TicketAttribute): Observable<TicketAttribute> {
    return this.http.put(`${this.getUri()}/${id}`, data).pipe(
      tap(() => this.updateCache())
    ) as Observable<TicketAttribute>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.getUri()}/${id}`).pipe(
      tap(() => this.updateCache())
    ) as Observable<unknown>;
  }

  protected updateCache(): Observable<TicketAttribute[]> {
    return this.http.get(this.getUri()).pipe(
      tap((ta: TicketAttribute[]) => this.cache = ta)
    );
  }

  protected abstract getUri(): string;
}
