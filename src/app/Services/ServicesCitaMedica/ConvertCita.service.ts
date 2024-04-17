import { Injectable } from "@angular/core";
import { CitaMedicaResponse } from "../../Models/Cita/CitaMedicaResponse";
import { Appointment } from "../../Models/Cita/Internal/CitaPaciente";

@Injectable({
    providedIn: 'root'
})

export class ConvertCita{
    constructor(){}

    convertToAppointmentList(citaMedicaResponse: CitaMedicaResponse[]): Appointment[] {
        return citaMedicaResponse.map(cita => ({
          id_cita_medica: cita.id_cita_medica,
          id_paciente: cita.id_paciente,
          name: cita.nombre,
          appointmentTime: this.formatTime(cita.hora_cita, cita.minutos),
          tipoCita: cita.tipoCita,
          sexo: cita.sexo,
          edad: cita.edad.toString(),
          symptoms: cita.symptoms,
          lastReview: "",
          prescripcion:"",
          observacion: cita.observacion,
          fecha: {
            year: cita.year_,
            month: cita.month_,
            day: cita.day_
          }
        }));
      }
      formatTime(hora: number, minutos: number): string {
        let ampm = 'AM';
        let horaFormateada = hora;
        
        if (hora >= 12) {
          ampm = 'PM';
          horaFormateada = hora === 12 ? 12 : hora - 12;
        }
      
        if (horaFormateada === 0) {
          horaFormateada = 12;
        }
      
        const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
      
        return `${horaFormateada}:${minutosFormateados} ${ampm}`;
      }
}
