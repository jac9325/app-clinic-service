import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allergy',
  standalone: true,
  imports: [],
  templateUrl: './allergy.component.html',
  styleUrl: './allergy.component.sass'
})
export class AllergyComponent {
  @Input() titulo:string='';

  @Input() descripcion:string='';

  @Input() color:string='';
}
