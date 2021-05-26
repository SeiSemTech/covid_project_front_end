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
    // // DATOS QUEMADOS
    // const laboratories: Lot[] = [
    //   {id: 1, laboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 1, estado: "Registrado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
    //   {id: 2, laboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 1, estado: "Registrado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
    //   {id: 3, laboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 2, estado: "Enviado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
    //   {id: 4, laboratorio: {id: 1, nombre: "PFeizer"}, estado:{ id: 3, estado: "Entregado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
    //   {id: 5, laboratorio: {id: 2, nombre: "AstraZeneca"}, estado:{ id: 1, estado: "Registrado"}, cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1},
    //   {id: 6, laboratorio: {id: 2, nombre: "AstraZeneca"}, estado:{ id: 3, estado: "Entregado"},  cantidadDosis: 400, costo: 2000, fechaAdquisicion: Date.now(), numeroLote: 1}]
    // return new Observable<{response: Lot[]}>(observer => observer.next({response: laboratories}));
    // URL ORIGINAL
    return this.http.get(this.urlVaccine+'/getLotes').pipe(map((lot: Response<Lot[]>) => lot));
  }

  public updateVaccineLot(lot: Lot): Observable<{ mensaje, data }> {
    return this.http.post(this.urlVaccine+'/updateLote', lot).pipe(map((data:{ mensaje, data }) => data));
  }

  public deleteVaccineLot(lot: Lot): Observable<Response<any>> {
    return this.http.post(this.urlVaccine+'/deleteLote', lot).pipe(map((data:Response<any>) => data));
  }
}
