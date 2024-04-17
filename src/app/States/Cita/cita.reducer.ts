import { createReducer, on } from "@ngrx/store";
import { CantidadCita } from "../../Models/Cita/CantidadCita";
import { CitaMedicaResponse } from "../../Models/Cita/CitaMedicaResponse";
import { loadCantidadCitaMedica, loadCitaMedicaInitial, loadListCitaMedica } from "./cita.actions";


export interface CitaMedicaInitialState{
    cantidadCitaMedica: CantidadCita;
    citaMedicaResponse: CitaMedicaResponse[];
}

export const initialUsernameState: CitaMedicaInitialState = {
  cantidadCitaMedica: null,
  citaMedicaResponse: []
}

export const citasMedicasInitialReducer = createReducer(
    initialUsernameState,
    on(loadCitaMedicaInitial, (state, { data }) => 
      {
      return {
        ...state,
      cantidadCitaMedica: data.cantidadCita,
      citaMedicaResponse: data.citaMedicaResponse
      }
    }),
    on(loadListCitaMedica, ( state,{ citaMedica }) =>
    {
      return {
        ...state,
        citaMedicaResponse: citaMedica
      }
    }),
    on(loadCantidadCitaMedica, (state, { cantidadCita })=> 
    {
      return{
        ...state,
        cantidadCitaMedica: cantidadCita
      }
    })
  );