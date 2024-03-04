import { Routes } from '@angular/router';
import {LoginComponent} from '../Components/Login/login/login.component'
import { RecuperarCuentaComponent } from '../Components/Login/recuperar_cuenta/recuperar_cuenta.component';
import { VerificarCodigoCorreoComponent } from '../Components/Login/verificar_codigo_correo/verificar_codigo_correo.component';
import { ReestablecerContraseñaComponent } from '../Components/Login/reestablecer_contraseña_/reestablecer_contraseña.component';
import { RegistroComponent } from '../Components/Login/registro/registro.component';
import { ValidarPorCorreoComponent } from '../Components/Login/validar_por_correo/validar_por_correo.component';
import { ValidarPorCelularComponent } from '../Components/Login/validar_por_celular/validar_por_celular.component';
import { CompletarRegistroComponent } from '../Components/Login/completar_registro/completar_registro.component';
import { CompletarDatosComponent } from '../Components/Login/completar_datos/completar_datos.component';
import { HomeComponent } from '../Components/Medicos/Home/home.component';
import { TablaPacientesComponent } from '../Components/Medicos/Pacientes/Tabla_pacientes/tabla_pacientes.component';
import { GraficosComponent } from '../Components/Medicos/Pacientes/graficos/graficos.component';
import { CuentaPacienteComponent } from '../Components/Medicos/Cuenta_Paciente/cuenta_paciente.component';
import { CajaComponent } from '../Components/Medicos/Caja/caja.component';
import { CajaCerradaComponent } from '../Components/Medicos/Caja/Alerta/caja-cerrada/caja-cerrada.component';
import { CajaAbiertaComponent } from '../Components/Medicos/Caja/Alerta/caja-abierta/caja-abierta.component';
import { ConfiguracionesComponent } from '../Components/Medicos/Configuraciones/configuraciones.component';


export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'recuperar_cuenta',
        component: RecuperarCuentaComponent
    },
    {
        path: 'verificar_codigo_correo',
        component: VerificarCodigoCorreoComponent
    },
    {
        path: 'reestablecer_contraseña',
        component: ReestablecerContraseñaComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'validar_por_correo',
        component: ValidarPorCorreoComponent
    },
    {
        path: 'validar_por_celular',
        component: ValidarPorCelularComponent
    },
    {
        path: 'completar_registro',
        component: CompletarRegistroComponent
    },
    {
        path: 'completar_datos',
        component: CompletarDatosComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tabla_pacientes',
        component: TablaPacientesComponent
    },
    {
        path: 'graficos',
        component: GraficosComponent
    },
    {
        path: 'cuenta_paciente',
        component: CuentaPacienteComponent
    },
    {
        path: 'caja',
        component: CajaComponent
    },
    {
        path: 'caja_cerrada',
        component: CajaCerradaComponent
    },
    {
        path: 'caja_abierta',
        component: CajaAbiertaComponent
    },
    {
        path: 'configuraciones',
        component: ConfiguracionesComponent
    }
];
