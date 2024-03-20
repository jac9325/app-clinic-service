import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AtencionesMedicasComponent } from './Components/atenciones-medicas/atenciones-medicas.component';
import { ExamenesComplementariosComponent } from './Components/examenes-complementarios/examenes-complementarios.component';
import { FiliacionComponent } from './Components/filiacion/filiacion.component';
import { NuevaAtencionComponent } from './Components/nueva-atencion/nueva-atencion.component';
import { ProcedimientosQuirurgicosComponent } from './Components/procedimientos-quirurgicos/procedimientos-quirurgicos.component';
import { BarraBusquedaComponent } from './Components/barra-busqueda/barra-busqueda.component';


@Component({
  selector: 'historias-clinicas',
  standalone: true,
  imports: [ NgbNavModule, RouterModule, AtencionesMedicasComponent, ExamenesComplementariosComponent, FiliacionComponent,
              NuevaAtencionComponent, ProcedimientosQuirurgicosComponent, BarraBusquedaComponent],
  providers: [NgbNavConfig],
  templateUrl: './historias-clinicas.component.html',
  styleUrl: './historias-clinicas.component.sass'
})
export class HistoriasClinicasComponent {
  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}
}
