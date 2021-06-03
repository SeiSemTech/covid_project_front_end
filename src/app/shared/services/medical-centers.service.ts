import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Send} from "../../core/models/Send";
import {Response} from "../../core/dto/response";

@Injectable({
  providedIn: 'root'
})
export class MedicalCentersService {

  private readonly urlVaccine: string = `${environment.apiUrl + URL.VACCINE}`

  constructor(private http: HttpClient) { }

  public getAllMedicalCenters(): Observable<Response<Send[]>> {
    return this.http.get(this.urlVaccine+'/getCentros').pipe(map((send: Response<Send[]>) => send));
  }

  public updateMedicalCenters(send: Send): Observable<any> {
    return this.http.post(this.urlVaccine+'/enviarVacuna', send).pipe(map(send => send));
  }
}
