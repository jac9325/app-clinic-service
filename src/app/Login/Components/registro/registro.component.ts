import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'registro',
  standalone: true,
  imports: [ FontAwesomeModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.sass'
})
export class RegistroComponent {

}
