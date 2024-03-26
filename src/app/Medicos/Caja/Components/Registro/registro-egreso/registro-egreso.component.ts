import { Component, inject, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'egreso',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './registro-egreso.component.html',
  styleUrl: './registro-egreso.component.sass'
})
export class RegistroEgresoComponent {
  private modalService = inject(NgbModal);

  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true , size: 'lg'});
	}
}
