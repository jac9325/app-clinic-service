import { Component, inject, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'examen-complementario',
  standalone: true,
  imports: [ CommonModule, NgbNavModule, FormsModule ],
  templateUrl: './examen-complementario.component.html',
  styleUrl: './examen-complementario.component.sass'
})
export class ExamenComplementarioComponent {

  

  private modalService = inject(NgbModal);
  active = 1;
  modalReference: any;
  opcionesDelBackend = { Laboratorio: [], Imagen: [], Patologia: [] };

  openModal(content: TemplateRef<any>) {
    this.modalReference = this.modalService.open(content, { size: 'm', centered: true });
    this.modalReference.shown.subscribe(() => {
      this.updateCheckboxesState();
    });
  }

  updateCheckboxesState() {
    // Asegúrate de que las opcionesDelBackend estén actualizadas con los datos del backend
    this.opcionesDelBackend = this.getOpcionesDelBackend();

    // Actualiza el estado de los checkboxes basándose en los datos de la tabla
    Object.keys(this.opcionesDelBackend).forEach(categoria => {
      this.opcionesDelBackend[categoria].forEach(opcion => {
        const isChecked = this.tableData.some(row => row[categoria] === opcion);
        const checkbox = document.querySelector(`input.check[value='${opcion}']`) as HTMLInputElement;
        if(checkbox) checkbox.checked = isChecked;
      });
    });
  }

  getOpcionesDelBackend() {
    // Aquí iría la lógica para recuperar los datos del backend
    // Por ahora, es solo un ejemplo
    return {
      Laboratorio: ['Dato1', 'Dato2', 'Dato3'],
      Imagen: ['Imagen1', 'Imagen2', 'Imagen3'],
      Patologia: ['Patologia1', 'Patologia2']
    };
  }

  selectedLaboratorio: string[] = [];
  selectedImagen: string[] = [];
  selectedPatologia: string[] = [];

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

  accept() {

    this.tableData = [];
  
    const maxLen = Math.max(this.selectedLaboratorio.length, this.selectedImagen.length, this.selectedPatologia.length);
    for (let i = 0; i < maxLen; i++) {
      this.tableData.push({
        Laboratorio: this.selectedLaboratorio[i] || '',
        Imagen: this.selectedImagen[i] || '',
        Patologia: this.selectedPatologia[i] || ''
      });
    }
  
    // Cierra el modal
    this.modalReference.close();
  }
  
  getTableData(): any[] {
    // Transforma los datos a la estructura esperada por autoTable
    return this.tableData.map(row => [row.Laboratorio, row.Imagen, row.Patologia]);
  }

}