import { createAction, props } from "@ngrx/store";
import { UsuarioMedico } from "../../Models/Responses/UsuarioMedico";

export const LOAD_STATE_LOGIN_MEDICO = '[Login Component] Login Success'

export const loginMedicoSuccess = createAction(
    LOAD_STATE_LOGIN_MEDICO,
    props<{ data: UsuarioMedico}>()
);

export const logout = createAction('[Auth] Logout');