import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Especialista } from '../../Models/Especialista';
//import { error } from 'console';


@Injectable({
    providedIn: 'root',
})

export class EspecialistaService{
    private apiUrl = 'http://localhost:8080/api/v1/especialistas/by-usuario-institucion';

    constructor(private http: HttpClient){}

    getEspecialista(id: number): Observable<Especialista>{
        return this.http.get<Especialista>(`${this.apiUrl}/${id}`).pipe(
            tap(data => console.log('Retrieved especialista :', data)),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse)
    {
        console.error('Error fetching especialista', error);
        return throwError('Something went wrong, please try gain later.');
    }
}