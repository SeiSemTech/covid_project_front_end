import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRulesComponent } from './business-rules/business-rules.component';
import { MinistryHealthRoutingModule } from "./ministry-health.routing";
import { PopulationVaccineComponent } from './population-vaccine/population-vaccine.component';
import {TitleBarModule} from "../../shared/modules/title-bar/title-bar.module";
import {InfoPanelModule} from "../../shared/modules/info-panel/info-panel.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    BusinessRulesComponent,
    PopulationVaccineComponent
  ],
  imports: [
    CommonModule,
    MinistryHealthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    TitleBarModule,
    InfoPanelModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    SharedModule
  ]
})
export class MinistryHealthModule { }
