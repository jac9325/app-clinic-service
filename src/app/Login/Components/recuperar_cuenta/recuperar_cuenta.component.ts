import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'recuperar-cuenta',
  standalone: true,
  imports: [ FontAwesomeModule, RouterModule ],
  templateUrl: './recuperar_cuenta.component.html',
  styleUrl: './recuperar_cuenta.component.sass'
})
export class RecuperarCuentaComponent {
  
}
