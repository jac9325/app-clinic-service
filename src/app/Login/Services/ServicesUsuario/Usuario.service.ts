import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";

const URL_BASE_USUARIO_DOMAIN = environment.URI_BASE_USUARIO_DOMAIN;
@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    constructor(private http: HttpClient) {}   
    getUserWihtAllRols(username:string): Observable<any>{
        const endpointUrl = URL_BASE_USUARIO_DOMAIN +"/api/auth/usuario/getUserAndRols/"+ username;
 
       return this.http.get<any>(endpointUrl).pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        // Manejo de errores: redirigir o mostrar mensaje de error
        console.error('Error al obtener datos del usuario:', error);
        // Devuelve un observable con un mensaje de error
        return throwError(() => error);;
    }

    private cleanToken(val:string):string{
        return val.replace(/^"(.*)"$/, '$1');
    }
}