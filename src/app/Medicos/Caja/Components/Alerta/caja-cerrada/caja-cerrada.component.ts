import { Component, inject, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'caja-cerrada',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './caja-cerrada.component.html',
  styleUrl: './caja-cerrada.component.sass'
})
export class CajaCerradaComponent {
  private modalService = inject(NgbModal);

  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

  openVerticallyCentered2(content: TemplateRef<any>) {
    this.modalService.dismissAll();
    this.modalService.open(content, { centered: true , size: 'sm'});
  }

}
