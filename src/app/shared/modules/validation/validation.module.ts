import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidationComponent} from './validation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [ValidationComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [ValidationComponent]
})
export class ValidationModule {
}
