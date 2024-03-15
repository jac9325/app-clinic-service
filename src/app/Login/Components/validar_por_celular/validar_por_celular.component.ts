import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'validar-por-celular',
  standalone: true,
  imports: [ FontAwesomeModule, NgbDropdownModule , RouterModule],
  templateUrl: './validar_por_celular.component.html',
  styleUrl: './validar_por_celular.component.sass'
})
export class ValidarPorCelularComponent {

}
