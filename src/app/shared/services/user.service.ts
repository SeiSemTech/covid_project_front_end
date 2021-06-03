import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {User} from "../../core/models/User";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Response} from "../../core/dto/response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urlUser: string = `${environment.apiUrl + URL.USER}`

  constructor(private http: HttpClient) { }

  public createUser(user: User): Observable<{ mensaje, data }>   {
    return this.http.post(this.urlUser+'/createUsuario', user).pipe(map( (data:{ mensaje, data }) => data));
  }

  public getAllUsers(): Observable<Response<User[]>> {
    return this.http.get(this.urlUser+'/getUsuarios').pipe(map((user: Response<User[]>) => user));
  }

  public updateUser(user: User): Observable<{ mensaje, data }> {
    return this.http.post(this.urlUser+'/updateUsuario', user).pipe(map((data:{ mensaje, data }) => data));
  }

  public deleteUser(user: User): Observable<{ mensaje, data }> {
    return this.http.post(this.urlUser+'/deleteUsuario', user).pipe(map((data:{ mensaje, data }) => data));
  }
}
