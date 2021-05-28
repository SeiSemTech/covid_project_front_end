import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../../core/dto/response";
import {Rol} from "../../core/models/Rol";
import {map} from "rxjs/operators";
import {Poblacion} from "../../core/models/Poblacion";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  private readonly urlProfile: string = `${environment.apiUrl + URL.POPULATION}`;

  constructor(private http: HttpClient) { }

  public getAllProfiles():  Observable<Response<Poblacion[]>> {
    //DATOS QUEMADOS
    // const poblacions: Poblacion[] = [{id: 1, nombres: "sergio geova", apellidos: "porti cast", edad: 22, fechaNacimiento: 231, ocupacion: "el de los tintos", tipoDocumento: "Cedula ciudadania"}];
    // const response: Response<Poblacion[]> = {error: 0, response: poblacions, mensaje: "" };
    // return new Observable<Response<Poblacion[]>>(observer => observer.next(response));
    //URL ORIGINAL
    return this.http.get(this.urlProfile+'/getPacientes').pipe(map((r: Response<Poblacion[]>) => {
      console.log(r);
      return r;
    }));
  }
}
