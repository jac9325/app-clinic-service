export interface CitaMedicaResponse {
    id_cita_medica: number;
    id_paciente: number;
    hora_cita: number;
    minutos: number;
    nombre: string;
    sexo: string;
    edad: number;
    symptoms: string;
    year_: number;
    month_: number;
    day_: number;
    tipoCita: string;
    observacion:string;
  }