import { Component } from '@angular/core';
import { AllergyComponent } from '../allergy/allergy.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [AllergyComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.sass'
})
export class AlertComponent {

}
