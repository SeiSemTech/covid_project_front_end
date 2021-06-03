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
    return this.http.get(this.urlProfile+'/getPerfiles').pipe(map((r: Response<Rol[]>) => r));
  }
}
