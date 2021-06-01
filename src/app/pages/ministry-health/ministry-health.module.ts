import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRulesComponent } from './business-rules/business-rules.component';
import { MinistryHealthRoutingModule } from "./ministry-health.routing";
import { PopulationVaccineComponent } from './population-vaccine/population-vaccine.component';
import {TitleBarModule} from "../../shared/modules/title-bar/title-bar.module";
import {InfoPanelModule} from "../../shared/modules/info-panel/info-panel.module";
import {MatCardModule} from '@angular/material/card';
import {PipesModule} from "../../core/pipes/pipes.module";



@NgModule({
  declarations: [
    BusinessRulesComponent,
    PopulationVaccineComponent
  ],
  imports: [
    CommonModule,
    MinistryHealthRoutingModule,
    TitleBarModule,
    InfoPanelModule,
    MatCardModule,
    PipesModule
  ]
})
export class MinistryHealthModule { }
