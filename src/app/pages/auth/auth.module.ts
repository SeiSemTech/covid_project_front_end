import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth.routing";
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';

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
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class AuthModule {
}
