import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Login} from "../../core/models/Login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly urlLogin: string = `${environment.apiUrl + URL.LOGIN}`

  constructor(private http: HttpClient) { }

  public login(login: Login) {
    return this.http.post(this.urlLogin, login, {headers:{skip:"true"}});
  }
}
