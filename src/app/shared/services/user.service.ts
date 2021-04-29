import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {User} from "../../core/models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urlUser: string = `${environment.apiUrl + URL.USER}`

  constructor(private http: HttpClient) { }

  public createUser(user: User) {
    return this.http.post(this.urlUser+'/createUsuario', user);
  }
}
