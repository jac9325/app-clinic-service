import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class LoginServices{
    private baseUrl:string = 'http://localhost:8082/api/v1/usuario/loginEmail';
    constructor(private http: HttpClient) {}
    loginByEmail(email: string, password: string): Observable<any> {
        const credentials = btoa(`${email}:${password}`);
        const headers = { Authorization: `Basic ${credentials}` };
    
        return this.http.post<any>(`${this.baseUrl}/loginEmail`, null, { headers });
      }
}