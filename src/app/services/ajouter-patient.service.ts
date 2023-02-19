import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjouterPatientService {

  constructor(private httpClient :HttpClient) { }

  ajouter(patiant:any):Observable<any>{
   return this.httpClient.post('http://localhost:8181/patient/add',patiant);
  }

  show(patiantid:any):Observable<any>{
    return this.httpClient.get('http://localhost:8181/patient/'+patiantid);
  }
}
