import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { UsuarioMedico } from "../../Models/Responses/UsuarioMedico";

//const URL_BASE_USUARIO_DOMAIN = environment.URI_BASE_USUARIO_DOMAIN;
const URL_BASE_USUARIO_INSTITUCION_ESPECIALISTA = environment.URI_BASE_USUARIO_INSTITUCION_ESPECIALISTA_DOMAIN;
@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    constructor(private http: HttpClient) {}   
    
    getUserWihtAllRols(username:string): Observable<UsuarioMedico>{
        //const endpointUrl = URL_BASE_USUARIO_INSTITUCION_ESPECIALISTA +"/api/auth/usuario/getUserAndRols/"+ username;
        const endpointUrl = URL_BASE_USUARIO_INSTITUCION_ESPECIALISTA +"/api/v1/usuarioinstitucionespecialistas/getUsuarioMedicoResponses/"+ username;
        console.log( "Este es mi endpoint " + endpointUrl);
        let token = localStorage.getItem('TOKEN_CLINIC_SERVICE_JPA');
        token = token.replace(/^"(.*)"$/, '$1');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
          
        return this.http.get<UsuarioMedico>(endpointUrl,  { headers }).pipe(
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