import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


const URI_USUARIO_DOMAIN = environment.URI_BASE_USUARIO_DOMAIN;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
  })
export class LoginService{
    
    //private baseUrl:string = environment.usuarioDomainUrl+"/login";
    BASE_URL:string = URI_USUARIO_DOMAIN+"/login"
    //aperturando el cliente web
    constructor(private http: HttpClient) {}

    login(username:string, password: string): Observable<any> { 
      
      /* construyendo el objeto json */
      return this.http.post(
        this.BASE_URL,
        {
          username,
          password
        },
        httpOptions
      );
      // const loginData = {username, password};
      // return this.http.post<any>(`${this.baseUrl}`, loginData);
    }
}