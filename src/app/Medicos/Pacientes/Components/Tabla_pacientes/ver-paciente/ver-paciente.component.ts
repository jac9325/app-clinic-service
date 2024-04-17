import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosModalService } from '../../../Services/Datos_Modal/datos-modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ver-paciente',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './ver-paciente.component.html',
  styleUrl: './ver-paciente.component.sass'
})
export class VerPacienteComponent {

  paciente: any | null = null;

  esMasculino: boolean = false;
  esFemenino: boolean = false;

  esDonadorP: boolean = false;
  esDonadorN: boolean = false;

  esCasadoP: boolean = false;
  esCasadoN: boolean = false;

  esTrabajadorP: boolean = false;
  esTrabajadorN: boolean = false;

  constructor(private datosmodalService: DatosModalService) { }

  ngOnInit() {
    this.datosmodalService.pacienteActual.subscribe(paciente => {
      this.paciente = paciente;
      this.esMasculino = paciente?.sexo === 'M';
      this.esFemenino = paciente?.sexo === 'F';

      this.esDonadorP = paciente?.es_donador === 1;
      this.esDonadorN = paciente?.es_donador === 0;

      this.esCasadoP = paciente?.es_casado === 1;
      this.esCasadoN = paciente?.es_casado === 0;
      
      this.esTrabajadorP = paciente?.es_trabajador === 1;
      this.esTrabajadorN = paciente?.es_trabajador === 0;
      
    });
  }
}
