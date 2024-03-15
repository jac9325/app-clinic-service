import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'laboratorio',
  standalone: true,
  imports: [ RouterModule, FontAwesomeModule ],
  templateUrl: './laboratorio.component.html',
  styleUrl: './laboratorio.component.sass'
})
export class LaboratorioComponent {

}
