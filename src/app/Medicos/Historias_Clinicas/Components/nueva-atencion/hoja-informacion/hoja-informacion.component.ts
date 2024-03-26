import { Component, inject, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NuevaCitaComponent } from '../../../../Nueva_Cita/nueva-cita.component';

@Component({
  selector: 'hoja-informacion',
  standalone: true,
  imports: [ NuevaCitaComponent ],
  templateUrl: './hoja-informacion.component.html',
  styleUrl: './hoja-informacion.component.sass'
})
export class HojaInformacionComponent {
  private modalService = inject(NgbModal);

	openModal(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg', centered: true });
	}
}
