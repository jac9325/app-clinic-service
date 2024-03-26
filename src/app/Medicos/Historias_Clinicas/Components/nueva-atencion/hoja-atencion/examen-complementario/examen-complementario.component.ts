import { Component, inject, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'examen-complementario',
  standalone: true,
  imports: [ CommonModule, NgbNavModule, FormsModule ],
  templateUrl: './examen-complementario.component.html',
  styleUrl: './examen-complementario.component.sass'
})
export class ExamenComplementarioComponent {

  constructor(private cdr: ChangeDetectorRef) { }

  private modalService = inject(NgbModal);
  active = 1;

  openModal(content: TemplateRef<any>) {
    this.originalData = JSON.parse(JSON.stringify(this.tableData));
    this.selectedLaboratorio = this.originalData.map(data => data.Laboratorio).filter(Boolean);
    this.selectedImagen = this.originalData.map(data => data.Imagen).filter(Boolean);
    this.selectedPatologia = this.originalData.map(data => data.Patologia).filter(Boolean);
    this.modalService.open(content, { size: 'm', centered: true });
  }

  selectedLaboratorio: string[] = [];
  selectedImagen: string[] = [];
  selectedPatologia: string[] = [];


  originalData: {Laboratorio: string, Imagen: string, Patologia: string}[] = [];
  tableData: {Laboratorio: string, Imagen: string, Patologia: string}[] = [];

  onCheckboxChange(e: Event, value: string, category: string) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
        this[category as 'selectedLaboratorio' | 'selectedImagen' | 'selectedPatologia'].push(value);
    } else {
        const index = this[category as 'selectedLaboratorio' | 'selectedImagen' | 'selectedPatologia'].indexOf(value);
        if (index > -1) {
            this[category as 'selectedLaboratorio' | 'selectedImagen' | 'selectedPatologia'].splice(index, 1);
        }
    }
  }

  accept(modal: any) {
    // Vacía el array existente
    while (this.tableData.length > 0) {
      this.tableData.pop();
    }
  
    // Llena el array con los nuevos datos
    const maxLen = Math.max(this.selectedLaboratorio.length, this.selectedImagen.length, this.selectedPatologia.length);
    for (let i = 0; i < maxLen; i++) {
      this.tableData.push({
        Laboratorio: this.selectedLaboratorio[i] || '',
        Imagen: this.selectedImagen[i] || '',
        Patologia: this.selectedPatologia[i] || ''
      });
    }
  
    // Cierra el modal
    modal.close('Close click');
  }

}