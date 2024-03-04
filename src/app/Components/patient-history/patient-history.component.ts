import { Component } from '@angular/core';
import { FiliacionComponent } from '../filiacion/filiacion.component';
import { AtencionesMedicasComponent } from '../atenciones-medicas/atenciones-medicas.component';
import { ExamenesComplementariosComponent } from '../examenes-complementarios/examenes-complementarios.component';
import { ProcedimientosQuirurjicosComponent } from '../procedimientos-quirurjicos/procedimientos-quirurjicos.component';
import { NuevaAtencionComponent } from '../nueva-atencion/nueva-atencion.component';
import { FamilyBackgroundComponent } from '../family-background/family-background.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [FiliacionComponent, AtencionesMedicasComponent, 
          ExamenesComplementariosComponent, ProcedimientosQuirurjicosComponent,
          NuevaAtencionComponent, FamilyBackgroundComponent, AlertComponent],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.css'
})
export class PatientHistoryComponent {

}
