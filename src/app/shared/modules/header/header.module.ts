import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../../../core/pipes/pipes.module";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    PipesModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
