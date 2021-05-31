import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {MatButtonModule} from "@angular/material/button";
import {AdminRoutingModule} from "./dashboard.routing";
import { CardComponent } from './card/card.component';
import { PipesModule } from '../../core/pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AdminRoutingModule,
    PipesModule
  ]
})
export class DashboardModule { }
