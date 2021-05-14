import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rol} from "../../core/models/Rol";
import {map} from "rxjs/operators";
import {Response} from "../../core/dto/response";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly urlProfile: string = `${environment.apiUrl + URL.ROL}`;

  constructor(private http: HttpClient) { }

  public getAllProfiles():  Observable<Response<Rol[]>> {
    //DATOS QUEMADOS
    // const roles: Rol[] = [{id: 1, name: "Admin sistema", detalle: ""}, {id: 2, name: "Logística", detalle: ""}, {id: 3, name: "Personal salud", detalle: ""}];
    // const response: Response<Rol[]> = {error: 0, response: roles, mensaje: "" };
    // return new Observable<Response<Rol[]>>(observer => observer.next(response));
    //URL ORIGINAL
    return this.http.get(this.urlProfile+'/getPerfiles').pipe(map((r: Response<Rol[]>) => r));
  }
}
