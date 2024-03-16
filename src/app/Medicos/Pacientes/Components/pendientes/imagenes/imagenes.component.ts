import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'imagenes',
  standalone: true,
  imports: [ RouterModule, FontAwesomeModule],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.sass'
})
export class ImagenesComponent {

}
