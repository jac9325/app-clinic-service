import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'completar-datos',
  standalone: true,
  imports: [ FontAwesomeModule, NgbDropdownModule , RouterModule, NgbProgressbarModule],
  templateUrl: './completar_datos.component.html',
  styleUrl: './completar_datos.component.sass'
})
export class CompletarDatosComponent {

}
