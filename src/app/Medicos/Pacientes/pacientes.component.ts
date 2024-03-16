import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablaPacientesComponent } from './Components/Tabla_pacientes/tabla_pacientes.component';
import { ImagenesComponent } from './Components/pendientes/imagenes/imagenes.component';
import { LaboratorioComponent } from './Components/pendientes/laboratorio/laboratorio.component';
import { PatologiaComponent } from './Components/pendientes/patologia/patologia.component';
import { GraficosComponent } from './Components/graficos/graficos.component';


@Component({
  selector: 'pacientes',
  standalone: true,
  imports: [ RouterModule, TablaPacientesComponent, ImagenesComponent, LaboratorioComponent, PatologiaComponent, GraficosComponent ],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.sass'
})
export class PacientesComponent {

}
