import { Component } from '@angular/core';
import { ListAtencionsComponent } from '../list-atencions/list-atencions.component';

@Component({
  selector: 'app-atenciones-medicas',
  standalone: true,
  imports: [ListAtencionsComponent],
  templateUrl: './atenciones-medicas.component.html',
  styleUrl: './atenciones-medicas.component.sass'
})
export class AtencionesMedicasComponent {

}
