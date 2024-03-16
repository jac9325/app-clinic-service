import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'validar-por-correo',
  standalone: true,
  imports: [ FontAwesomeModule, RouterModule ],
  templateUrl: './validar_por_correo.component.html',
  styleUrl: './validar_por_correo.component.sass'
})
export class ValidarPorCorreoComponent {

}
