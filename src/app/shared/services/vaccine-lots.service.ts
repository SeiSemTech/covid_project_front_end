import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Lot} from "../../core/models/Lot";
import {Response} from "../../core/dto/response";

@Injectable({
  providedIn: 'root'
})
export class VaccineLotsService {

  private readonly urlVaccine: string = `${environment.apiUrl + URL.LOT}`

  constructor(private http: HttpClient) { }

  public createVaccineLot(lot: Lot): Observable<{ mensaje, data }>   {
    return this.http.post(this.urlVaccine+'/createLote', lot).pipe(map( (data:{ mensaje, data }) => data));
  }

  public getAllVaccineLots(): Observable<Response<Lot[]>> {
    return this.http.get(this.urlVaccine+'/getLotes').pipe(map((lot: Response<Lot[]>) => lot));
  }

  public updateVaccineLot(lot: Lot): Observable<{ mensaje, data }> {
    return this.http.post(this.urlVaccine+'/updateLote', lot).pipe(map((data:{ mensaje, data }) => data));
  }

  public deleteVaccineLot(lot: Lot): Observable<Response<any>> {
    return this.http.post(this.urlVaccine+'/deleteLote', lot).pipe(map((data:Response<any>) => data));
  }
}
