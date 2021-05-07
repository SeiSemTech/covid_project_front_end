import { Component, OnInit } from '@angular/core';
import {PATHS} from "../../core/constants/route.constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  paths = PATHS;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeSession() {
    this.router.navigate([PATHS.AUTHENTICATION.PRINCIPAL]);
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

}