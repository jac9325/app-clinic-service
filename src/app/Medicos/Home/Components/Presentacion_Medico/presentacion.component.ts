import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ImagenMedicoComponent } from './imagen_medico/imagen_medico.component';
import { VisitasComponent } from './visitas/visitas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


@Component({
  selector: 'presentacion',
  standalone: true,
  imports: [ RouterModule, BienvenidaComponent, ImagenMedicoComponent,
              EstadisticasComponent, VisitasComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.sass'
})
export class PresentacionComponent {

}
