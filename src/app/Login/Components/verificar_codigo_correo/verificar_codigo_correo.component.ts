import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'verificar-codigo-correo',
  standalone: true,
  imports: [ FontAwesomeModule, RouterModule],
  templateUrl: './verificar_codigo_correo.component.html',
  styleUrl: './verificar_codigo_correo.component.sass'
})
export class VerificarCodigoCorreoComponent {

}
