import { AsignarCajaSesionUsuario } from "./Models/AsignarCajaSesionUsuario/AsignarCajaSesionUsuario";
import { AsignarCajaUsuario } from "./Models/AsignarCajaUsuario/AsignarCajaUsuario";
import { Caja } from "./Models/Caja/Caja";
import { CajaSesion } from "./Models/CajaSesion/CajaSesion";
import { ConsultorioPrivadoDTO } from "./Models/ConsultorioPrivado/ConsultorioPrivadoDTO";
import { Rol } from "./Models/Rol/Rol";
import { Usuario } from "./Models/Usuario/Usuario";
import { UsuarioInstitucionEspecialistaDTO } from "./Models/UsuarioInstitucionEspecialista/UsuarioInstitucionEspecialistaDTO";

export interface State {
  usuario: Usuario;
  roles: Rol[];
  consultorioPrivado?: ConsultorioPrivadoDTO; //-- opcional 
  usuarioInstitucionEspecialista?: UsuarioInstitucionEspecialistaDTO; //-- opcional 
  caja?: Caja; //-- opcional 
  asignarCajaUsuario?: AsignarCajaUsuario; //-- opcional
  cajaSesion?: CajaSesion; //-- opcional
  asignarCajaSesionUsuario?: AsignarCajaSesionUsuario; //-- opcional
}