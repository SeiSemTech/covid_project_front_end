import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Response} from "../../core/dto/response";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly urlLocation: string = `${environment.apiUrl + URL.LOCATION}`;

  constructor(private http: HttpClient) { }

  public getClosestAddress(address: {input: string}): Observable<Response<any>> {
    return this.http.post(this.urlLocation+'/getCentroCercano', address).pipe(map((r:Response<any>) => r));
  }
}
