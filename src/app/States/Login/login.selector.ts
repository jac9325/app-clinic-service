import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LoginMedicoState } from "./login.reducer";

export const selectorLoginMedicoState = (state: AppState) => state.loginMedico;

export const selectUsuarioMedico= createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.usuario
)

export const selectRolesMedico = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.roles
);

export const selectConsultorioPrivado = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.consultorioPrivado
);

export const selectUsuarioInstitucionEspecialista = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.usuarioInstitucionEspecialista
);

export const selectCaja = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.caja
);

export const selectAsignarCajaUsuario = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.asignarCajaUsuario
);

export const selectCajaSesion = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.cajaSesion
);

export const selectAsignarCajaSesionUsuario = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.asignarCajaSesionUsuario
);

export const selectIsLoggedMedico = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.isLogged
);

export const selectEspecialistaMedico = createSelector(
    selectorLoginMedicoState,
    (state: LoginMedicoState) => state.especialista
);