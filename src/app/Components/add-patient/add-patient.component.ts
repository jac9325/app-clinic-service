import { Component } from '@angular/core';
import { HabitsComponent } from '../habits/habits.component';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [HabitsComponent],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.sass'
})
export class AddPatientComponent {

}
