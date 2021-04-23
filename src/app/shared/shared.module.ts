import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  providers:[AuthService],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
