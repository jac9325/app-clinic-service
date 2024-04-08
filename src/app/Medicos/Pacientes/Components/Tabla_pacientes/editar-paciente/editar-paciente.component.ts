import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'editar-paciente',
  standalone: true,
  imports: [ NgbDropdownModule ],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.sass'
})
export class EditarPacienteComponent {

}
