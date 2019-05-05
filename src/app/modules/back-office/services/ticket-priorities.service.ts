import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {TicketPriority} from "../models/ticket-priority";

const PRIORITIES_URL = `${environment.api.getUrl()}/ticket-priorities`;

@Injectable({
  providedIn: 'root'
})
export class TicketPrioritiesService {

  constructor(
    private http: HttpClient
  ) {}

  public get(): Observable<TicketPriority[]> {
    return this.http.get(PRIORITIES_URL) as Observable<TicketPriority[]>;
  }

  public create(priority: TicketPriority): Observable<TicketPriority> {
    return this.http.post(PRIORITIES_URL, TicketPriority) as Observable<TicketPriority>;
  }

  public update(id: number, priority: TicketPriority): Observable<TicketPriority> {
    return this.http.put(`${PRIORITIES_URL}/${id}`, priority) as Observable<TicketPriority>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${PRIORITIES_URL}/${id}`) as Observable<unknown>;
  }}
