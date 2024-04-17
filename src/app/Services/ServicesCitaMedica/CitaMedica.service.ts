import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "../../../environments/environment";
import { CantidadCita } from "../../Models/Cita/CantidadCita";
import { CitaMedicaResponse } from "../../Models/Cita/CitaMedicaResponse";

const URI_BASE_PACIENTE_COLABORADOR = environment.URI_BASE_PACIENTE_COLABORADOR_DOMAIN;
currentfecha:Date;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({
    providedIn: 'root',
  })

  export class CitaMedicaService{
    BASE_URL_CITA_MEDICA:string = URI_BASE_PACIENTE_COLABORADOR+"/api/v1/citasmedicas/cantidad"
    BASE_URL_LIST_CITA_RESPONSE:string = URI_BASE_PACIENTE_COLABORADOR+"/api/v1/citasmedicas/getListCitaMedicasHome/"

    //Se apertura el cliente
    constructor(private http: HttpClient){}

    chargeCantidadCitaMedica(idConsultorioPrivado: number, fecha: Date):Observable<any>{

        /* Obteniendo los parametros */
        const params = new HttpParams()
        .set('idConsultorioPrivado', idConsultorioPrivado)
        .set('fecha', fecha.toISOString());
        let token = localStorage.getItem('TOKEN_CLINIC_SERVICE_JPA');
        token = token.replace(/^"(.*)"$/, '$1');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        /* Construyendo el Objeto Json */
        return this.http.get<CantidadCita>(this.BASE_URL_CITA_MEDICA+"/"+idConsultorioPrivado+"/"+fecha.toISOString(), {  headers }).pipe(
          catchError((error) => {
            // Manejo de errores
            const errorMessage = 'Error al obtener la cantidad de citas médicas: ' + error.message;
            throw new Error(errorMessage);
          })
        );
    }

    ChargeListCitaMedicaResponse(idConsultorioPrivado:number, idUsuarioIE:number, fecha: Date):Observable<any>{
      let token = localStorage.getItem('TOKEN_CLINIC_SERVICE_JPA');
        token = token.replace(/^"(.*)"$/, '$1');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
      });
      return this.http.get<CitaMedicaResponse[]>(this.BASE_URL_LIST_CITA_RESPONSE+idConsultorioPrivado+"/"+idUsuarioIE+"/"+fecha.toISOString(), {  headers }).pipe(
        catchError((error) => {
          // Manejo de errores
          const errorMessage = 'Error al obtener la cantidad de citas médicas: ' + error.message;
          throw new Error(errorMessage);
        })
      );
    }
  }