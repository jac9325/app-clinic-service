import { CitaMedicaInitialState } from "./Cita/cita.reducer";
import { LoginMedicoState } from "./Login/login.reducer";

export interface AppState {
  loginMedico: LoginMedicoState,
  loadCitaMedicaInitial: CitaMedicaInitialState
}