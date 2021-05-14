import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Send} from "../../core/models/Send";

@Injectable({
  providedIn: 'root'
})
export class MedicalCentersService {

  private readonly urlVaccine: string = `${environment.apiUrl + URL.VACCINE}`

  constructor(private http: HttpClient) { }

  public getAllMedicalCenters(): Observable<Send[]> {

    return this.http.get('https://www.datos.gov.co/resource/u82n-j82m.json', {headers:{skip:"true"}}).pipe(map((send: Send[]) => send));
  }
}
