import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaIngresosComponent } from './tabla-ingresos/tabla_ingresos.component';
import { TablaEgresosComponent } from './tabla-egresos/tabla_egresos.component';

@Component({
  selector: 'tablas',
  standalone: true,
  imports: [ RouterModule, NgbNavModule, TablaIngresosComponent, TablaEgresosComponent ],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.sass'
})
export class TablasComponent  {

  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}
}