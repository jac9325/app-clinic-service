import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultorioComponent } from './Components/consultorio/consultorio.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { PersonalComponent } from './Components/personal/personal.component';
import { NuevoPersonalComponent } from './Components/nuevo-personal/nuevo-personal.component';
import { HomeComponent } from '../Home/home.component';

@Component({
  selector: 'configuraciones',
  standalone: true,
  imports: [ NgbNavModule, RouterModule, ConsultorioComponent, ServiciosComponent, PersonalComponent, NuevoPersonalComponent, HomeComponent ],
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
