import { ConsultorioPrivadoDTO } from "../ConsultorioPrivado/ConsultorioPrivadoDTO";
import { Especialista } from "../Especialista/Especialista";
import { Usuario } from "../Usuario/Usuario";
import { Rol } from "../Usuario/UsuarioAndRoles";
import { UsuarioInstitucionEspecialistaDTO } from "../UsuarioInstitucionEspecialista/UsuarioInstitucionEspecialistaDTO";
import { cajaUsuarioResponse } from "./CajaUsuarioResponse";

export interface UsuarioMedico{
    usuario: Usuario;
    rols: Rol[];
    consultorioPrivado: ConsultorioPrivadoDTO;
    usuarioInstitucionEspecialista: UsuarioInstitucionEspecialistaDTO;
    cajaUsuarioResponse: cajaUsuarioResponse;
    especialista: Especialista;
}