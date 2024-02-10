import { Routes } from '@angular/router';
import {NgbdOffcanvasBasic} from './components/componente1/componente1.component'
import {LoginComponent} from '../Components/Login/login/login.component'
import { RecuperarCuentaComponent } from '../Components/Login/recuperar_cuenta/recuperar_cuenta.component';

export const routes: Routes = [

    {
        path: 'home',
        component: NgbdOffcanvasBasic
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'recuperar_cuenta',
        component: RecuperarCuentaComponent
    }

];
