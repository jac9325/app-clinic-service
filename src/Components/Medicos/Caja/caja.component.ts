import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './Tablas/tablas.component';
import { RegistroIngresoComponent } from './Registro/registro-ingreso/registro-ingreso.component';
import { RegistroEgresoComponent } from './Registro/registro-egreso/registro-egreso.component';
import { CajaAbiertaComponent } from './Alerta/caja-abierta/caja-abierta.component';
import { CajaCerradaComponent } from './Alerta/caja-cerrada/caja-cerrada.component';


@Component({
  selector: 'caja',
  standalone: true,
  imports: [ RouterModule, CommonModule, TablasComponent, RegistroIngresoComponent, RegistroEgresoComponent, CajaAbiertaComponent, CajaCerradaComponent ],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.sass'
})
export class CajaComponent  {
  condicion: boolean;

  constructor() {
    // Aquí es donde estableces tu condición
    this.condicion = false;
  }

}