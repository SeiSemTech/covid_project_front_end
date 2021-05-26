import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {BusinessRulesComponent} from "./business-rules/business-rules.component";
import {PATHS} from "../../core/constants/route.constants";
import {PopulationVaccineComponent} from "./population-vaccine/population-vaccine.component";

const route: Routes = [
  { path: PATHS.MINISTRY_HEALTH.POPULATION_TO_VACCINE, component: PopulationVaccineComponent },
  { path: PATHS.MINISTRY_HEALTH.BUSINESS_RULES , component: BusinessRulesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class MinistryHealthRoutingModule {}
