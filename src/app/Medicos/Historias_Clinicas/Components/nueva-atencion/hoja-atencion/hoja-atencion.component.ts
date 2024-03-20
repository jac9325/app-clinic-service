import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecetaComponent } from './receta/receta.component';
import { ExamenComplementarioComponent } from './examen-complementario/examen-complementario.component';


@Component({
  selector: 'hoja-atencion',
  standalone: true,
  imports: [ CommonModule, RecetaComponent, ExamenComplementarioComponent ],
  templateUrl: './hoja-atencion.component.html',
  styleUrl: './hoja-atencion.component.sass'
})
export class HojaAtencionComponent {
  lineas = [{}]; // Inicialmente hay una línea

  agregarLinea() {
    this.lineas.push({}); // Agrega una nueva línea
  }
  diagnosticos = [{}]; // Inicialmente hay un diagnóstico

  agregarDiagnostico() {
    this.diagnosticos.push({}); // Agrega un nuevo diagnóstico
  }
  
}
