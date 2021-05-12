import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Lot} from "../../core/models/Lot";

@Injectable({
  providedIn: 'root'
})
export class VaccineLotsService {

  private readonly urlVaccine: string = `${environment.apiUrl + URL.VACCINE}`

  constructor(private http: HttpClient) { }

  public createVaccineLot(lot: Lot): Observable<{ mensaje, data }>   {
    return this.http.post(this.urlVaccine+'/createLote', lot).pipe(map( (data:{ mensaje, data }) => data));
  }

  public getAllVaccineLots(): Observable<{response: Lot[]}> {
    return this.http.get(this.urlVaccine+'/getLotes').pipe(map((lot: {response: Lot[]}) => lot));
  }

  public updateVaccineLot(lot: Lot): Observable<{ mensaje, data }> {
    return this.http.put(this.urlVaccine+'/updateLote', lot).pipe(map((data:{ mensaje, data }) => data));
  }

  public deleteVaccineLot(id: string): Observable<{ mensaje, data }> {
    return this.http.post(this.urlVaccine+'/deleteLote', id).pipe(map((data:{ mensaje, data }) => data));
  }
}
