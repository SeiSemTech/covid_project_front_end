import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {PATHS} from "../constants/route.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (!!localStorage.getItem('token')) {
      this.router.navigate([PATHS.DASHBOARD.MAIN]);
      return false;
    }
    return true;
  }
}
