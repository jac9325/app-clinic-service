import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PatologiasComponent } from './patologias/patologias.component';


@Component({
  selector: 'examenes-complementarios',
  standalone: true,
  imports: [ NgbNavModule, LaboratoriosComponent, ImagenesComponent, PatologiasComponent ],
  templateUrl: './examenes-complementarios.component.html',
  styleUrl: './examenes-complementarios.component.sass'
})
export class ExamenesComplementariosComponent {
  active = '1';
  isMobileScreen = false;
  orientation = 'vertical';

  constructor() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.orientation = window.innerWidth < 768 ? '' : 'vertical';
  }

}
