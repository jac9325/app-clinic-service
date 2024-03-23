import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecetaComponent } from './receta/receta.component';
import { ExamenComplementarioComponent } from './examen-complementario/examen-complementario.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule } from '@angular/forms';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';

interface Diagnostico {
  selectedCity: any;
}

@Component({
  selector: 'hoja-atencion',
  standalone: true,
  imports: [ CommonModule, RecetaComponent, ExamenComplementarioComponent, NgxSelectModule, FormsModule ],
  templateUrl: './hoja-atencion.component.html',
  styleUrl: './hoja-atencion.component.sass'
})
export class HojaAtencionComponent {
  lineas = [{}]; // Inicialmente hay una línea
  
  @ViewChildren('textareobservacion') textareasobservacion: QueryList<ElementRef>;
  @ViewChildren('textareadiagnostic') textareasdiagnostic: QueryList<ElementRef>;

  agregarLinea() {
    let allFilled = true;
    this.textareasobservacion.forEach(textareasobservacion => {
      if (textareasobservacion.nativeElement.value === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      this.lineas.push({});
    }
  }

  diagnosticos: Diagnostico[] = [{ selectedCity: null }]; // Ahora TypeScript sabe que cada diagnostico tiene una propiedad selectedCity

  agregarDiagnostico() {
    let allFilled = true;
    this.textareasdiagnostic.forEach(textareasdiagnostic => {
      if (textareasdiagnostic.nativeElement.value === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      this.diagnosticos.push({ selectedCity: null });
    }
  }
  
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė1'},
    {id: 5, name: 'Pabradė2'},
    {id: 6, name: 'Pabradė3'},
    {id: 7, name: 'Pabradė4'},
    {id: 8, name: 'Pabradė5'},
    {id: 9, name: 'Klaipėda'}
  ];

  selectedCity = null;

}
