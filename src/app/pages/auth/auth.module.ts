import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth.routing";
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageModule} from "../../shared/modules/message/message.module";
import {MatDialogModule} from "@angular/material/dialog";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
    MessageModule
  ]
})
export class AuthModule {
}
