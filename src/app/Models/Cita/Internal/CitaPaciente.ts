export interface Appointment {
    id_paciente: number;
    id_cita_medica: number;
    name: string;
    appointmentTime: string;
    tipoCita: string;
    sexo: string;
    edad: string;
    symptoms: string,
    lastReview: string,
    observacion: string,
    prescripcion: string,
    fecha: {
      year: number;
      month: number;
      day: number;
    };
  }