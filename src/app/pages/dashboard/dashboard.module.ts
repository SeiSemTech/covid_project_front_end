import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {MatButtonModule} from "@angular/material/button";
import {AdminRoutingModule} from "./dashboard.routing";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AdminRoutingModule
  ]
})
export class DashboardModule { }
