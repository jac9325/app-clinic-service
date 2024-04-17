import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CitaMedicaInitialState } from "./cita.reducer";


export const selectorLoadCitasMedicasInitialState = (state: AppState) => state.loadCitaMedicaInitial;

export const selectCitasAntiguas = createSelector(
    selectorLoadCitasMedicasInitialState,
    (state: CitaMedicaInitialState) => state.cantidadCitaMedica.cantidadAntiguos
)

export const selectCitasHoy = createSelector(
    selectorLoadCitasMedicasInitialState,
    (state: CitaMedicaInitialState) => state.cantidadCitaMedica.cantidadHoy
)

export const selectCitasNuevos = createSelector(
    selectorLoadCitasMedicasInitialState,
    (state: CitaMedicaInitialState) => state.cantidadCitaMedica.cantidadNuevos
)

export const selectCitas = createSelector(
    selectorLoadCitasMedicasInitialState,
    (state:CitaMedicaInitialState) => state.citaMedicaResponse
)