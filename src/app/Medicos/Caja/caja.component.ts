import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './Components/Tablas/tablas.component';
import { RegistroIngresoComponent } from './Components/Registro/registro-ingreso/registro-ingreso.component';
import { RegistroEgresoComponent } from './Components/Registro/registro-egreso/registro-egreso.component';
import { CajaAbiertaComponent } from './Components/Alerta/caja-abierta/caja-abierta.component';
import { CajaCerradaComponent } from './Components/Alerta/caja-cerrada/caja-cerrada.component';


@Component({
  selector: 'caja',
  standalone: true,
  imports: [ RouterModule, CommonModule, TablasComponent, RegistroIngresoComponent, RegistroEgresoComponent, CajaAbiertaComponent, CajaCerradaComponent ],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.sass'
})
export class CajaComponent  {
  estado_caja = false;
  ingreso_egreso = false;
}