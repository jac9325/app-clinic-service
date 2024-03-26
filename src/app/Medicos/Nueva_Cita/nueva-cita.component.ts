import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nueva-cita',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './nueva-cita.component.html',
  styleUrl: './nueva-cita.component.sass',
})
export class NuevaCitaComponent {}
