import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'reestablecer-contraseña',
  standalone: true,
  imports: [ FontAwesomeModule, RouterModule],
  templateUrl: './reestablecer_contraseña.component.html',
  styleUrl: './reestablecer_contraseña.component.sass'
})
export class ReestablecerContraseñaComponent {

}
