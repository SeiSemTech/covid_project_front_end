import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoPanelComponent} from "./info-panel.component";
import {MatButtonModule} from "@angular/material/button";
import {PipesModule} from "../../../core/pipes/pipes.module";



@NgModule({
  declarations: [InfoPanelComponent],
    imports: [CommonModule, MatButtonModule, PipesModule],
  exports: [InfoPanelComponent]
})
export class InfoPanelModule { }
