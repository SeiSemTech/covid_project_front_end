import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {VaccineLotsComponent} from "./vaccine-lots/vaccine-lots.component";
import {VaccinesShipmentComponent} from "./vaccines-shipment/vaccines-shipment.component";
import {PATHS} from "../../core/constants/route.constants";

const route: Routes = [
  { path: PATHS.LOGISTICS.VACCINE_LOTS, component: VaccineLotsComponent },
  { path: PATHS.LOGISTICS.VACCINES_SHIPMENT , component: VaccinesShipmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
