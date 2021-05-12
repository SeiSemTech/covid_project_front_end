import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoPanelComponent} from "./info-panel.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [InfoPanelComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [InfoPanelComponent]
})
export class InfoPanelModule { }
