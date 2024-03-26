import { Routes } from '@angular/router';
import { LoginComponent } from './Login/Components/login/login.component';
import { RecuperarCuentaComponent } from './Login/Components/recuperar_cuenta/recuperar_cuenta.component';
import { VerificarCodigoCorreoComponent } from './Login/Components/verificar_codigo_correo/verificar_codigo_correo.component';
import { ReestablecerContraseñaComponent } from './Login/Components/reestablecer_contraseña_/reestablecer_contraseña.component';
import { RegistroComponent } from './Login/Components/registro/registro.component';
import { ValidarPorCelularComponent } from './Login/Components/validar_por_celular/validar_por_celular.component';
import { ValidarPorCorreoComponent } from './Login/Components/validar_por_correo/validar_por_correo.component';
import { CompletarRegistroComponent } from './Login/Components/completar_registro/completar_registro.component';
import { CompletarDatosComponent } from './Login/Components/completar_datos/completar_datos.component';
import { HomeComponent } from './Medicos/Home/home.component';
import { TablaPacientesComponent } from './Medicos/Pacientes/Components/Tabla_pacientes/tabla_pacientes.component';
import { GraficosComponent } from './Medicos/Pacientes/Components/graficos/graficos.component';
import { CuentaPacienteComponent } from './Medicos/Cuenta_Paciente/cuenta_paciente.component';
import { CajaComponent } from './Medicos/Caja/caja.component';
import { CajaAbiertaComponent } from './Medicos/Caja/Components/Alerta/caja-abierta/caja-abierta.component';
import { CajaCerradaComponent } from './Medicos/Caja/Components/Alerta/caja-cerrada/caja-cerrada.component';
import { ConfiguracionesComponent } from './Medicos/Configuraciones/configuraciones.component';
import { ImagenesComponent } from './Medicos/Pacientes/Components/pendientes/imagenes/imagenes.component';
import { PacientesComponent } from './Medicos/Pacientes/pacientes.component';
import { NavegacionComponent } from './Navegacion/navegacion.component';
import { NuevaCitaComponent } from './Medicos/Nueva_Cita/nueva-cita.component';
import { BuscadorComponent } from './Medicos/Historias_Clinicas/Components/buscador/buscador.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recuperar_cuenta',
    component: RecuperarCuentaComponent,
  },
  {
    path: 'verificar_codigo_correo',
    component: VerificarCodigoCorreoComponent,
  },
  {
    path: 'reestablecer_contraseña',
    component: ReestablecerContraseñaComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'validar_por_correo',
    component: ValidarPorCorreoComponent,
  },
  {
    path: 'validar_por_celular',
    component: ValidarPorCelularComponent,
  },
  {
    path: 'completar_registro',
    component: CompletarRegistroComponent,
  },
  {
    path: 'completar_datos',
    component: CompletarDatosComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tabla_pacientes',
    component: TablaPacientesComponent,
  },
  {
    path: 'graficos',
    component: GraficosComponent,
  },
  {
    path: 'cuenta_paciente',
    component: CuentaPacienteComponent,
  },
  {
    path: 'caja',
    component: CajaComponent,
  },
  {
    path: 'caja_cerrada',
    component: CajaCerradaComponent,
  },
  {
    path: 'caja_abierta',
    component: CajaAbiertaComponent,
  },
  {
    path: 'configuraciones',
    component: ConfiguracionesComponent,
  },
  {
    path: 'imagenes',
    component: ImagenesComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  },
  {
    path: '',
    component: NavegacionComponent,
  },
  {
    path: 'nueva_cita',
    component: NuevaCitaComponent,
  },
  {
    path: 'buscador',
    component: BuscadorComponent,
  }
];
