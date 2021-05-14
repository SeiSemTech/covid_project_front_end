import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Lot} from "../../core/models/Lot";
import {Laboratory} from "../../core/models/laboratory";

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
    // DATOS QUEMADOS
    const laboratories: Lot[] = [
      {id: 1, idLaboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 1, estado: "Registrado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
      {id: 2, idLaboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 1, estado: "Registrado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
      {id: 3, idLaboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 2, estado: "Enviado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
      {id: 4, idLaboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 3, estado: "Entregado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
      {id: 5, idLaboratorio: {id: 2, nombre: "AstraZeneca"}, estado:{ id: 1, estado: "Registrado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
      {id: 6, idLaboratorio: {id: 2, nombre: "AstraZeneca"}, estado:{ id: 3, estado: "Entregado"},  cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1}]
    return new Observable<{response: Lot[]}>(observer => observer.next({response: laboratories}));
    // URL ORIGINAL
    return this.http.get(this.urlVaccine+'/getLotes').pipe(map((lot: {response: Lot[]}) => lot));
  }

  public updateVaccineLot(lot: Lot): Observable<{ mensaje, data }> {
    return this.http.post(this.urlVaccine+'/updateLote', lot).pipe(map((data:{ mensaje, data }) => data));
  }

  public deleteVaccineLot(id: string): Observable<{ mensaje, data }> {
    return this.http.post(this.urlVaccine+'/deleteLote', id).pipe(map((data:{ mensaje, data }) => data));
  }
}
