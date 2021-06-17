import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusinessRulesComponent} from './business-rules/business-rules.component';
import {MinistryHealthRoutingModule} from "./ministry-health.routing";
import {PopulationVaccineComponent} from './population-vaccine/population-vaccine.component';
import {TitleBarModule} from "../../shared/modules/title-bar/title-bar.module";
import {InfoPanelModule} from "../../shared/modules/info-panel/info-panel.module";
import {MatCardModule} from '@angular/material/card';
import {PipesModule} from "../../core/pipes/pipes.module";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AgmCoreModule } from '@agm/core';
import { PopulationMapComponent } from './population-vaccine/population-map/population-map.component'
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BusinessRulesComponent,
    PopulationVaccineComponent,
    PopulationMapComponent
  ],
  imports: [
    CommonModule,
    MinistryHealthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    TitleBarModule,
    InfoPanelModule,
    MatCardModule,
    PipesModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    MatPaginatorModule,
    AgmCoreModule.forRoot({apiKey: "AIzaSyCWHKoUxXTdr_k9qBPQ7VN_am27M2Ac7Hs"}),
    MatButtonModule,
  ]
})
export class MinistryHealthModule { }
