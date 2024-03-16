import { Component, HostListener, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../Medicos/Home/home.component';
import { CajaComponent } from '../Medicos/Caja/caja.component';
import { ConfiguracionesComponent } from '../Medicos/Configuraciones/configuraciones.component';
import { PacientesComponent } from '../Medicos/Pacientes/pacientes.component';
import { CuentaPacienteComponent } from '../Medicos/Cuenta_Paciente/cuenta_paciente.component';
import { NuevoPacienteComponent } from '../Medicos/Nuevo-Paciente/nuevo-paciente.component';
import { HistoriasClinicasComponent } from '../Medicos/Historias_Clinicas/historias-clinicas.component';


@Component({
  selector: 'navegacion',
  standalone: true,
  imports: [ RouterModule, CommonModule, NgbDropdownModule, NgbNavModule, HomeComponent, PacientesComponent, CuentaPacienteComponent,
            NgbCollapseModule, HistoriasClinicasComponent, CajaComponent, ConfiguracionesComponent, NuevoPacienteComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.sass'
})
export class NavegacionComponent {
  active = '1';
  isSmallScreen = false;
  isCollapsed = true;
  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = (event.target as Window).innerWidth < 1000;
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isSmallScreen = window.innerWidth < 1000;
    }
  }
}
