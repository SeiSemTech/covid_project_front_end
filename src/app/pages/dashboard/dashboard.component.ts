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
  roles: [any];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.roles.forEach(a => console.log(a.name));
  }

  isRole(rol: string): boolean {
    return !! this.roles.filter(a => a.name === rol).length;
  }

  closeSession() {
    localStorage.clear();
    this.router.navigate([PATHS.AUTHENTICATION.PRINCIPAL]);
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  profile(profile: string): boolean {
    const rol = JSON.parse(localStorage.getItem('roles'));
    console.log(rol.find(a => a === profile));
    return true;
  }

}
