import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {URL} from "../../core/constants/url.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../../core/models/Profile";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly urlProfile: string = `${environment.apiUrl + URL.PROFILE}`;

  constructor(private http: HttpClient) { }

  public getAllProfiles(): Profile[] {
    const arrayProfile: Profile[] = [{id: 1, name: "Admin sistema"}, {id: 2, name: "Logística"}, {id: 3, name: "Personal salud"}];
    return arrayProfile;
    // return this.http.get(this.urlProfile+'/getPerfiles').pipe(map((profile: Profile[]) => profile));
  }
}
