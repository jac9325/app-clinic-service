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

  availableOptions2 = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
  selectedOptions2 = [];

  addOption(event: Event, availableOptions: string[], selectedOptions: string[]) {
    const value = (event.target as HTMLSelectElement).value;
    const index = availableOptions.indexOf(value);
    if (index > -1) {
      selectedOptions.push(value);
      availableOptions.splice(index, 1);
    }
  }

  removeOption(index: number, availableOptions: string[], selectedOptions: string[]) {
    if (index > -1) {
      availableOptions.push(selectedOptions[index]);
      selectedOptions.splice(index, 1);
    }
  }

}
