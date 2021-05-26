import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleBarComponent} from "./title-bar.component";
import {PipesModule} from "../../../core/pipes/pipes.module";

@NgModule({
  declarations: [TitleBarComponent],
    imports: [CommonModule, PipesModule],
  exports: [TitleBarComponent]
})
export class TitleBarModule { }
