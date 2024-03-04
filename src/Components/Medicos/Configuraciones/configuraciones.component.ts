import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultorioComponent } from './consultorio/consultorio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PersonalComponent } from './personal/personal.component';
import { NuevoPersonalComponent } from './nuevo-personal/nuevo-personal.component';

@Component({
  selector: 'configuraciones',
  standalone: true,
  imports: [ NgbNavModule, RouterModule, ConsultorioComponent, ServiciosComponent, PersonalComponent, NuevoPersonalComponent ],
  providers: [NgbNavConfig],
  templateUrl: './configuraciones.component.html',
  styleUrl: './configuraciones.component.sass'
})
export class ConfiguracionesComponent {
  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}
}
