import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";

//const URL_BASE_USUARIO_DOMAIN = environment.URI_BASE_USUARIO_DOMAIN;
const URL_BASE_USUARIO_INSTITUCION_ESPECIALISTA = environment.URI_BASE_USUARIO_INSTITUCION_ESPECIALISTA
@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    constructor(private http: HttpClient) {}   
    
    getUserWihtAllRols(username:string): Observable<any>{
        const endpointUrl = URL_BASE_USUARIO_INSTITUCION_ESPECIALISTA +"/api/auth/usuario/getUserAndRols/"+ username;
        console.log( "Este es mi endpoint " + endpointUrl );
        let token = sessionStorage.getItem('token-clinic-services-jpa');
        token = token.replace(/^"(.*)"$/, '$1');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
          
        return this.http.get<any>(endpointUrl,  { headers }).pipe(
          catchError(this.handleError));
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