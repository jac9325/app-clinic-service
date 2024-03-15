import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'nuevo-paciente',
  standalone: true,
  imports: [ NgbDropdownModule ],
  templateUrl: './nuevo-paciente.component.html',
  styleUrl: './nuevo-paciente.component.sass'
})
export class NuevoPacienteComponent {

}
