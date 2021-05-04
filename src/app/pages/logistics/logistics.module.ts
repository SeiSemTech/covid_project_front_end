import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccineLotsComponent} from "./vaccine-lots/vaccine-lots.component";
import {AuthRoutingModule} from "./logistics.routing";
import {VaccinesShipmentComponent} from './vaccines-shipment/vaccines-shipment.component';

@NgModule({
  declarations: [
    VaccineLotsComponent,
    VaccinesShipmentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class LogisticsModule { }
