import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

  constructor(
    public dialogRef: MatDialogRef<ValidationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
}
