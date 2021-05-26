import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../../../core/pipes/pipes.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        PipesModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
