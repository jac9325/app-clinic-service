import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'nuevo-personal',
  standalone: true,
  imports: [ NgbDropdownModule ],
  templateUrl: './nuevo-personal.component.html',
  styleUrl: './nuevo-personal.component.sass'
})
export class NuevoPersonalComponent {

}
