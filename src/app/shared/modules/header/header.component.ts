import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PATHS} from "../../../core/constants/route.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public route: Router) { }

  closeSession() {
    localStorage.clear();
    this.route.navigate([PATHS.AUTHENTICATION.PRINCIPAL]);
  }
}
