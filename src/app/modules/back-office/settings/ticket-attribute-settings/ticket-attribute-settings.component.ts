import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {TicketAttribute} from '../../../../common/ticket-attributes/ticket-attribute';
import {TicketAttributeService} from '../../../../common/ticket-attributes/ticket-attribute.service';
import {MatDialog} from '@angular/material';
import {AddTicketAttributeComponent} from './add-ticket-attribute/add-ticket-attribute.component';
import {switchMap, filter} from 'rxjs/operators';

@Component({
  selector: 'app-ticket-attribute-settings',
  templateUrl: './ticket-attribute-settings.component.html',
  styleUrls: ['./ticket-attribute-settings.component.scss']
})
export class TicketAttributeSettingsComponent implements OnInit {
  @Input()
  public ticketAttributeService: TicketAttributeService;

  private ticketAttributesSubject = new BehaviorSubject<TicketAttribute[]>(null);
  public ticketAttributesObservable = this.ticketAttributesSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ticketAttributeService.get()
      .subscribe(data => {
        this.ticketAttributesSubject.next(data);
      });
  }

  public addTicketAttribute(): void {
    const dialogRef = this.dialog.open(AddTicketAttributeComponent);
    dialogRef.afterClosed().pipe(
      filter(data => Boolean(data)),
      switchMap(data => this.ticketAttributeService.create(data)),
      switchMap(() => this.ticketAttributeService.get())
    ).subscribe(data => {
      this.ticketAttributesSubject.next(data);
      this.cd.detectChanges();
    });
  }

  public removeTicketAttribute(id: number): void {
    this.ticketAttributeService.remove(id).pipe(
      switchMap(() => this.ticketAttributeService.get())
    ).subscribe(data => this.ticketAttributesSubject.next(data));
  }

}
