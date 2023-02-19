import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authAdmin : any|undefined;
  constructor(private httpClient :HttpClient) { }

   login(admin:any):Observable<any>{
      let ad = this.httpClient.post('http://localhost:8181/auth/login',admin);
      if(!ad) return throwError(()=>new Error("admin not found"));
       return ad;
   }

   authenticatAdmin(admin:any):Observable<boolean>{
    this.authAdmin=admin;
    localStorage.setItem("admin",JSON.stringify({usename:this.authAdmin.username,jwt:"JWT_TOKEN"}));
    return of(true);
   }

   isAuthenticed(){
    return this.authAdmin!=undefined;
   }
   logout():Observable<boolean>{
    this.authAdmin =undefined;
    localStorage.removeItem("admin")
    return of(true);
   }
}
