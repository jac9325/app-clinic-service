import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ver-paciente',
  standalone: true,
  imports: [ NgbDropdownModule ],
  templateUrl: './ver-paciente.component.html',
  styleUrl: './ver-paciente.component.sass'
})
export class VerPacienteComponent {

}
