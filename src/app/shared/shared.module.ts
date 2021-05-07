import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { InputDirective } from './directive/input.directive';



@NgModule({
  declarations: [InputDirective],
  providers: [AuthService],
  exports: [InputDirective ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
