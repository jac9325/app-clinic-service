import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'completar-registro',
  standalone: true,
  imports: [ FontAwesomeModule, RouterModule ],
  templateUrl: './completar_registro.component.html',
  styleUrl: './completar_registro.component.sass'
})
export class CompletarRegistroComponent {

}
