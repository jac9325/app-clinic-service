import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'patologia',
  standalone: true,
  imports: [ RouterModule, FontAwesomeModule ],
  templateUrl: './patologia.component.html',
  styleUrl: './patologia.component.sass'
})
export class PatologiaComponent {

}
