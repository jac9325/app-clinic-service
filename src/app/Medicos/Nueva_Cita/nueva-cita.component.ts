import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'nueva-cita',
  standalone: true,
  imports: [ NgbDropdownModule, CommonModule ],
  templateUrl: './nueva-cita.component.html',
  styleUrl: './nueva-cita.component.sass'
})
export class NuevaCitaComponent {
  public modalService = inject(NgbModal);

	cerrarModal() {
    this.modalService.dismissAll();
  }

  availableOptions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
  selectedOptions = [];

  addOption(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedOptions.push(value);
    this.availableOptions = this.availableOptions.filter(option => option !== value);
  }

  removeOption(index) {
    this.availableOptions.push(this.selectedOptions[index]);
    this.selectedOptions = this.selectedOptions.filter((_, i) => i !== index);
  }

}
