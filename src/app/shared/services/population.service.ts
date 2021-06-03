import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../../core/dto/response";
import {map} from "rxjs/operators";
import {Poblacion} from "../../core/models/Poblacion";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  private readonly urlProfile: string = `${environment.apiUrl + URL.POPULATION}`;

  constructor(private http: HttpClient) { }

  public getAllProfiles():  Observable<Response<Poblacion[]>> {
    return this.http.get(this.urlProfile+'/getPacientes').pipe(map((r: Response<Poblacion[]>) => {
      console.log(r);
      return r;
    }));
  }
}
