import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Response} from "../../core/dto/response";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Coordenada} from "../../core/models/Coordenada";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly urlLocation: string = `${environment.apiUrl + URL.LOCATION}`;
  private readonly otherUrl: string = `${'https://seim-location.azurewebsites.net' + URL.LOCATION}`;

  constructor(private http: HttpClient) { }

  public getClosestAddress(address: {input: string}): Observable<Response<any>> {
    return this.http.post(this.urlLocation+'/getCentroCercano', address).pipe(map((r:Response<any>) => r));
  }

  public getLocation(address: {input: string}): Observable<Coordenada> {
    return this.http.post(this.otherUrl, address).pipe(map((r: Coordenada) => r))
  }
}
