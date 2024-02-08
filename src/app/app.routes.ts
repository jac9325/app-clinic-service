import { Routes } from '@angular/router';
import {NgbdOffcanvasBasic} from './components/componente1/componente1.component'
import {LoginComponent} from '../Components/Login/login/login.component'

export const routes: Routes = [

    {
        path: 'home',
        component: NgbdOffcanvasBasic
    },
    {
        path: 'login',
        component: LoginComponent
    }

];
