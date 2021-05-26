import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRulesComponent } from './business-rules/business-rules.component';
import { MinistryHealthRoutingModule } from "./ministry-health.routing";
import { PopulationVaccineComponent } from './population-vaccine/population-vaccine.component';



@NgModule({
  declarations: [
    BusinessRulesComponent,
    PopulationVaccineComponent
  ],
  imports: [
    CommonModule,
    MinistryHealthRoutingModule
  ]
})
export class MinistryHealthModule { }
