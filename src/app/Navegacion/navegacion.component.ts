import { CommonModule } from '@angular/common';
import { Component, HostListener, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule, NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { CajaComponent } from '../Medicos/Caja/caja.component';
import { ConfiguracionesComponent } from '../Medicos/Configuraciones/configuraciones.component';
import { CuentaPacienteComponent } from '../Medicos/Cuenta_Paciente/cuenta_paciente.component';
import { HistoriasClinicasComponent } from '../Medicos/Historias_Clinicas/historias-clinicas.component';
import { HomeComponent } from '../Medicos/Home/home.component';
import { NuevaCitaComponent } from '../Medicos/Nueva_Cita/nueva-cita.component';
import { NuevoPacienteComponent } from '../Medicos/Nuevo-Paciente/nuevo-paciente.component';
import { PacientesComponent } from '../Medicos/Pacientes/pacientes.component';
import { Rol } from '../Models/Usuario/UsuarioAndRoles';
import { CitaMedicaService } from '../Services/ServicesCitaMedica/CitaMedica.service';
import { selectEspecialistaMedico, selectRolesMedico } from '../States/Login/login.selector';
import { AppState } from '../States/app.state';


@Component({
  selector: 'navegacion',
  standalone: true,
  imports: [ RouterModule, CommonModule, NuevaCitaComponent, NgbDropdownModule, NgbNavModule, HomeComponent, PacientesComponent, CuentaPacienteComponent,
            NgbCollapseModule, HistoriasClinicasComponent, CajaComponent, ConfiguracionesComponent, NuevoPacienteComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.sass'
})
export class NavegacionComponent {

  /* Constructor */
  constructor(
    private store: Store<AppState>,
    private citaMedicaService: CitaMedicaService
  ) {
   }

  private modalService = inject(NgbModal);

	openModal(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg', centered: true });
	}

  active = '1';
  isSmallScreen = false;
  isCollapsed = true;
  isExpanded = false;
  isHidden = false;
  nombre: string;
  rols:Rol[];
  rol:string;
  currentIdConsultorioprivado:number = 0;
  currentDate:Date = new Date();

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      this.isExpanded = false;
    }
  }

  ngOnInit() {
    /* Cantidad de Citas*/
    //this.store.select()
    this.store.select(selectEspecialistaMedico).subscribe(item=>{
      this.nombre = item.primer_apellido + " " + item.primer_nombre;
    })

    this.store.select(selectRolesMedico).subscribe(item=>{
      this.rols = item;
      this.rol = this.selecctionarRol(this.rols);
    })
    if (typeof window !== 'undefined') {
      this.isSmallScreen = window.innerWidth < 1000;
    }
    if (this.isSmallScreen) {
      this.isExpanded = false;
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = (event.target as Window).innerWidth < 1000;
    if (this.isSmallScreen) {
      this.isExpanded = false;
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }
  
  @ViewChild(CajaComponent) cajaComponent: CajaComponent;

  setActiveForCajaAndTablas(cajaActive: string, tablasActive: number) {
    this.active = cajaActive;
    if (this.cajaComponent) {
      this.cajaComponent.tablasActive = tablasActive;
    }
  }

  selecctionarRol(rols:Rol[]):string{
    if (rols.some(rol => rol.nombre === 'ROLE_ADMIN')) {
      return 'ADMIN';
  } else if (rols.some(rol => rol.nombre === 'ROLE_USUARIO_INSTITUCION_ESPECIAL')) {
      return 'ESPECIALISTA';
  } else {
      return 'USER';
  }
  }
}