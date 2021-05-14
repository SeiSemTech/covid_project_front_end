import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Laboratory} from "../../core/models/laboratory";

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  private readonly urlLaboratory: string = `${environment.apiUrl + URL.LABORATORY}`

  constructor(private http: HttpClient) {
  }

  public getAllLaboratories(): Observable<{ response: Laboratory[] }> {
    //DATOS QUEMADOS
    const laboratories: Laboratory[] = [{id: 1, nombre: "PFeizer"}, {id: 2, nombre: "AstraZeneca"}, {id: 3, nombre: "Johnson's & Johnson's"}]
    return new Observable<{response: Laboratory[]}>(observer => observer.next({response: laboratories}));
    //URL ORIGINAL
    return this.http.get(this.urlLaboratory + '/getLaboratorios').pipe(map((laboratory: { response: Laboratory[] }) => laboratory));
  }
}
