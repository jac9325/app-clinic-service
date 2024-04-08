import { createReducer, on } from "@ngrx/store";
import { AsignarCajaSesionUsuario } from "../../Models/AsignarCajaSesionUsuario/AsignarCajaSesionUsuario";
import { AsignarCajaUsuario } from "../../Models/AsignarCajaUsuario/AsignarCajaUsuario";
import { Caja } from "../../Models/Caja/Caja";
import { CajaSesion } from "../../Models/CajaSesion/CajaSesion";
import { ConsultorioPrivadoDTO } from "../../Models/ConsultorioPrivado/ConsultorioPrivadoDTO";
import { Especialista } from "../../Models/Especialista/Especialista";
import { Rol } from "../../Models/Rol/Rol";
import { Usuario } from "../../Models/Usuario/Usuario";
import { UsuarioInstitucionEspecialistaDTO } from "../../Models/UsuarioInstitucionEspecialista/UsuarioInstitucionEspecialistaDTO";
import { loginMedicoSuccess } from "./login.actions";


export interface LoginMedicoState{
  usuario: Usuario;
  roles: Rol[];
  consultorioPrivado: ConsultorioPrivadoDTO; 
  usuarioInstitucionEspecialista: UsuarioInstitucionEspecialistaDTO; 
  caja?: Caja; //-- opcional 
  asignarCajaUsuario?: AsignarCajaUsuario; //-- opcional
  cajaSesion?: CajaSesion; //-- opcional
  asignarCajaSesionUsuario?: AsignarCajaSesionUsuario; //-- opcional
  isLogged: Boolean;
  especialista: Especialista;
}

export const initialLoginState: LoginMedicoState = {
    usuario: null,
    roles: [],
    consultorioPrivado: null,
    usuarioInstitucionEspecialista: null,
    caja: null,
    asignarCajaSesionUsuario: null,
    cajaSesion: null,
    asignarCajaUsuario: null,
    isLogged: false,
    especialista:null
}

export const loginReducer = createReducer(
    initialLoginState,
    on(loginMedicoSuccess, (state, { data }) => 
      {
      return {
        ...state,
      usuario: data.usuario,
      roles: data.rols,
      consultorioPrivado: data.consultorioPrivado, 
      usuarioInstitucionEspecialista: data.usuarioInstitucionEspecialista, 
      caja: data.cajaUsuarioResponse.caja,
      asignarCajaUsuario: data.cajaUsuarioResponse.asignarCajaUsuario,
      cajaSesion: data.cajaUsuarioResponse.cajaSesion, 
      asignarCajaSesionUsuario: data.cajaUsuarioResponse.asignarCajaSesionUsuario,
      isLogged: true,
      especialista: data.especialista
      }
    }),
  );