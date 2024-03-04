import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablaPacientesCuentaComponent } from './tabla_pacientes_cuenta/tabla_pacientes_cuenta.component';
import { TablaCuentaComponent } from './tabla_cuenta/tabla_cuenta.component';
import { TablaDetallesComponent } from './tabla_detalles/tabla_detalles.component';


@Component({
  selector: 'cuenta-paciente',
  standalone: true,
  imports: [ RouterModule, TablaPacientesCuentaComponent, TablaCuentaComponent, TablaDetallesComponent ],
  templateUrl: './cuenta_paciente.component.html',
  styleUrl: './cuenta_paciente.component.sass'
})
export class CuentaPacienteComponent {

}