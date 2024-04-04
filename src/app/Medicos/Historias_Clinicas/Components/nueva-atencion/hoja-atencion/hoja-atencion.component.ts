import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecetaComponent } from './receta/receta.component';
import { ExamenComplementarioComponent } from './examen-complementario/examen-complementario.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule } from '@angular/forms';
import { ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ExportPdfService } from '../../../Services/export-pdf/export-pdf.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

interface Diagnostico {
  selectedCity: any;
}

@Component({
  selector: 'hoja-atencion',
  standalone: true,
  imports: [ CommonModule, RecetaComponent, ExamenComplementarioComponent, NgxSelectModule, FormsModule, NgbDropdownModule ],
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

  constructor(private exportPdfService: ExportPdfService) {}

  @ViewChild(ExamenComplementarioComponent) examenComplementarioComponent!: ExamenComplementarioComponent;
  @ViewChild(RecetaComponent) recetaComponent!: RecetaComponent;

  exportarExamenComplementario() {
    const datosExamenComplementario = this.obtenerDatosExamenComplementario();
    if (datosExamenComplementario.length > 0) {
      this.exportPdfService.exportarExamenComplementarioAPDF(datosExamenComplementario);
    } else {
      console.error('No hay datos para exportar');
    }
  }

  exportarRecetaMedica() {
    const datosRecetaMedica = this.obtenerDatosRecetaMedica();
    if (datosRecetaMedica.length > 0) {
      this.exportPdfService.exportarRecetaMedicaAPDF(datosRecetaMedica);
    } else {
      console.error('No hay datos para exportar');
    }
  }

  exportarAmbasTablas() {
    const datosRecetaMedica = this.obtenerDatosRecetaMedica();
    const datosExamenComplementario = this.obtenerDatosExamenComplementario();
    if (datosRecetaMedica.length > 0 && datosExamenComplementario.length > 0) {
      this.exportPdfService.exportarAmbasTablasAPDF(datosRecetaMedica, datosExamenComplementario);
    } else {
      console.error('No hay datos para exportar en una o ambas tablas.');
    }
  }

  obtenerDatosExamenComplementario(): any[] {
    // Asegúrate de que el componente hijo ha sido cargado
    if (this.examenComplementarioComponent) {
      return this.examenComplementarioComponent.getTableData();
    }
    return [];
  }

  obtenerDatosRecetaMedica(): any[] {
    // Asegúrate de que el componente hijo ha sido cargado
    if (this.recetaComponent) {
      return this.recetaComponent.getTableData();
    }
    return [];
  }

}
