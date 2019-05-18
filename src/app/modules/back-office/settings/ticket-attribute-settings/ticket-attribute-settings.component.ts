import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {TicketAttribute} from "../../models/ticket-attribute";
import {TicketAttributeService} from "../../services/ticket-attribute.service";
import {MatDialog} from "@angular/material";
import {AddTicketAttributeComponent} from "./add-ticket-attribute/add-ticket-attribute.component";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ticket-attribute-settings',
  templateUrl: './ticket-attribute-settings.component.html',
  styleUrls: ['./ticket-attribute-settings.component.scss']
})
export class TicketAttributeSettingsComponent implements OnInit {
  @Input()
  public ticketAttributeService: TicketAttributeService;

  private ticketAttributesSubject = new Subject<TicketAttribute[]>();
  public ticketAttributesObservable = this.ticketAttributesSubject.asObservable();

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.ticketAttributeService.get()
      .subscribe(attributes => this.ticketAttributesSubject.next(attributes));
  }

  public addTicketAttribute(): void {
    const dialogRef = this.dialog.open(AddTicketAttributeComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }
      console.log(data);

      this.ticketAttributeService.create(data).pipe(
        switchMap(() => this.ticketAttributeService.get())
      )
        .subscribe(data2 => this.ticketAttributesSubject.next(data2));
    });
  }

  public removeTicketAttribute(id: number): void{
    console.log('works')
  }

}
