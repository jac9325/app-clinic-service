import { AsignarCajaSesionUsuario } from "../AsignarCajaSesionUsuario/AsignarCajaSesionUsuario";
import { AsignarCajaUsuario } from "../AsignarCajaUsuario/AsignarCajaUsuario";
import { Caja } from "../Caja/Caja";
import { CajaSesion } from "../CajaSesion/CajaSesion";

export class cajaUsuarioResponse{
    caja: Caja;
    cajaSesion: CajaSesion;
    asignarCajaSesionUsuario: AsignarCajaSesionUsuario;
    asignarCajaUsuario: AsignarCajaUsuario;
}