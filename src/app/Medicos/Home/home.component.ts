import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscarPacientesComponent } from './Components/Buscar_Pacientes/buscar_pacientes.component';
import { CalendarioComponent } from './Components/Calendario_actividades/calendario_actividades.component';
import { PresentacionComponent } from './Components/Presentacion_Medico/presentacion.component';


@Component({
  selector: 'home-medicos',
  standalone: true,
  imports: [ RouterModule, CommonModule, BuscarPacientesComponent, CalendarioComponent, PresentacionComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  
}