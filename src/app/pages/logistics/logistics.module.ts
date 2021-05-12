import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccineLotsComponent} from "./vaccine-lots/vaccine-lots.component";
import {AuthRoutingModule} from "./logistics.routing";
import {VaccinesShipmentComponent} from './vaccines-shipment/vaccines-shipment.component';
import {InfoPanelModule} from "../../shared/modules/info-panel/info-panel.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {TitleBarModule} from "../../shared/modules/title-bar/title-bar.module";

@NgModule({
  declarations: [
    VaccineLotsComponent,
    VaccinesShipmentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InfoPanelModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    TitleBarModule
  ]
})
export class LogisticsModule { }
