import { Component } from '@angular/core';
import { AddPatientComponent } from '../../Components/add-patient/add-patient.component';

@Component({
  selector: 'app-agregar-paciente',
  standalone: true,
  imports: [AddPatientComponent],
  templateUrl: './agregar-paciente.component.html',
  styleUrl: './agregar-paciente.component.sass'
})
export class AgregarPacienteComponent {

}
