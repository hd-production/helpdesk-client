import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-ticket-attribute',
  templateUrl: './add-ticket-attribute.component.html',
  styleUrls: ['./add-ticket-attribute.component.scss']
})
export class AddTicketAttributeComponent implements OnInit {

  public createForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(
    public matDialogRef: MatDialogRef<AddTicketAttributeComponent>
  ) { }

  ngOnInit() {
  }

  public submit() {
    if(!this.createForm.value.name){
      return;
    }
    this.matDialogRef.close(this.createForm.value);
  }

}
