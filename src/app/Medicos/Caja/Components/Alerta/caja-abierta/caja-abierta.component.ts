import { Component, inject, TemplateRef, ViewEncapsulation  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'caja-abierta',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './caja-abierta.component.html',
  styleUrl: './caja-abierta.component.sass'
})
export class CajaAbiertaComponent {
  private modalService = inject(NgbModal);

  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true , size: 'lg'});
	}
}
