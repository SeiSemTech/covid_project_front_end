import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import {LottieModule} from "ngx-lottie";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    LottieModule,
    MatButtonModule
  ]
})
export class MessageModule { }
