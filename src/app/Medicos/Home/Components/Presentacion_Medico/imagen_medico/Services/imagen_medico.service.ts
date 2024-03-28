import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class ImagenMedicoService {
    private apiUrl = 'http://localhost:8080/api/v1/especialistas/by-usuario-institucion'; // Replace with your backend API endpoint

    constructor(private http: HttpClient) {}

    getImagePath(id: number): Observable<string>{
        return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
            tap(data => console.log('Retrieved image path:', data.rutaimagen)),
            map(data => data.rutaimagen)
            
        );
    }
}
