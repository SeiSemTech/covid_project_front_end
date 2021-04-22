import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "lottie-web";
import {Router} from "@angular/router";
import {PATHS} from "../../../core/constants/route.constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/covid_login.json',
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  goToAdmin() {
    this.router.navigate([PATHS.HOME_ADMIN.PRINCIPAL]);
  }

}
