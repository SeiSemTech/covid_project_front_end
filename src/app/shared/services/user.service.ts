import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {User} from "../../core/models/User";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Response} from "../../core/dto/response";
import {Rol} from "../../core/models/Rol";

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
    //DATOS QUEMADOS
    const roles: Rol[] = [{id: 1, name: "Admin sistema", detalle: ""}, {id: 2, name: "Logística", detalle: ""}, {id: 3, name: "Personal salud", detalle: ""}];
    const roles2: Rol[] = [{id: 1, name: "Admin sistema", detalle: ""}];
    const users: User[] = [
      {id: "1", name: "Sergio", lastname: "Portilla", password: "sdsa", username: "portserg", document: 13121, state: true, creationDate: 1231, roles: roles},
      {id: "2", name: "Paula", lastname: "Cadena", password: "43242", username: "cadepaul", document: 324234, state: true, creationDate: 1231, roles: roles2},
      {id: "3", name: "Laura", lastname: "Davila", password: "2343td", username: "davilaur", document: 23354, state: true, creationDate: 1231}
    ];
    const response: Response<User[]> = {error: 0, response: users, mensaje: "" };
    return new Observable<Response<User[]>>(observer => observer.next(response));

    //URL ORIGINAL
    return this.http.get(this.urlUser+'/getUsuarios').pipe(map((user: Response<User[]>) => user));
  }

  public updateUser(user: User): Observable<{ mensaje, data }> {
    return this.http.put(this.urlUser+'/updateUsuario', user).pipe(map((data:{ mensaje, data }) => data));
  }

  public deleteUser(id: string): Observable<{ mensaje, data }> {
    return this.http.post(this.urlUser+'/deleteUsuario', id).pipe(map((data:{ mensaje, data }) => data));
  }
}
