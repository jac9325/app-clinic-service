import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscarPacientesComponent } from './Buscar_Pacientes/buscar_pacientes.component';
import { CalendarioComponent } from './Calendario_actividades/calendario_actividades.component';
import { PresentacionComponent } from './Presentacion_Medico/presentacion.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [ RouterModule, CommonModule, BuscarPacientesComponent, CalendarioComponent, PresentacionComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  
}