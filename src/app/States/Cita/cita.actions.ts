import { createAction, props } from "@ngrx/store";
import { CantidadCita } from "../../Models/Cita/CantidadCita";
import { CitaMedicaInitial } from "../../Models/Cita/CitaMedicaInitial";
import { CitaMedicaResponse } from "../../Models/Cita/CitaMedicaResponse";

export const LOAD_CITAS_MEDICAS_INITIAL = '[Cita] Citas Medicas Initial'
export const LOAD_LIST_CITA_MEDICA_RESPONSE = '[Cita] List Cita Medica'
export const LOAD_CANTIDAD_CITA_MEDICA = '[Cita] Cantidad Cita Medica'

export const loadCitaMedicaInitial = createAction(LOAD_CITAS_MEDICAS_INITIAL,props<{ data: CitaMedicaInitial}>());
export const loadListCitaMedica = createAction(LOAD_LIST_CITA_MEDICA_RESPONSE, props<{citaMedica: CitaMedicaResponse[]}>());
export const loadCantidadCitaMedica = createAction(LOAD_CANTIDAD_CITA_MEDICA, props<{cantidadCita: CantidadCita}>())
