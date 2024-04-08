import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';


@Component({
  selector: 'nuevo-paciente',
  standalone: true,
  imports: [ NgbDropdownModule, CommonModule ],
  templateUrl: './nuevo-paciente.component.html',
  styleUrl: './nuevo-paciente.component.sass'
})
export class NuevoPacienteComponent {

  // En tu componente TypeScript:
  selectedImage: File | null = null;

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    // Procesa la imagen según tus necesidades.
  }

  getObjectUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  borrarImagen(): void {
    this.selectedImage = null;
  }

  habitos = [{}];
  @ViewChildren('habito') habito: QueryList <ElementRef>;

  agregarHabitos() {
    let allFilled = true;
    this.habito.forEach(habito => {
      if (habito.nativeElement.value === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      this.habitos.push({});
    }
  }

  antecedentes = [{}];
  @ViewChildren('antecedente') antecedente: QueryList <ElementRef>;

  agregarAntecedente() {
    let allFilled = true;
    this.antecedente.forEach(antecedente => {
      if (antecedente.nativeElement.value === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      this.antecedentes.push({});
    }
  }

  antfamiliares = [{}];
  @ViewChildren('antfamiliar') antfamiliar: QueryList <ElementRef>;

  agregarAntFamiliar() {
    let allFilled = true;
    this.antfamiliar.forEach(antfamiliar => {
      if (antfamiliar.nativeElement.value === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      this.antfamiliares.push({});
    }
  }

  antepidemiologicos = [{}];
  @ViewChildren('antepidemiologico') antepidemiologico: QueryList <ElementRef>;

  agregarAntEpidemiologico() {
    let allFilled = true;
    this.antepidemiologico.forEach(antepidemiologico => {
      if (antepidemiologico.nativeElement.value === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      this.antepidemiologicos.push({});
    }
  }

}
