import { CantidadCita } from "./CantidadCita";
import { CitaMedicaResponse } from "./CitaMedicaResponse";

export interface CitaMedicaInitial{
    citaMedicaResponse: CitaMedicaResponse[];
    cantidadCita: CantidadCita;
}