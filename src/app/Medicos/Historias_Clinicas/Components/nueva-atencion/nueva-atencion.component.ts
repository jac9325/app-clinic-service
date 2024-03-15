import { Component } from '@angular/core';
import { HojaAtencionComponent } from './hoja-atencion/hoja-atencion.component';
import { HojaInformacionComponent } from './hoja-informacion/hoja-informacion.component';


@Component({
  selector: 'nueva-atencion',
  standalone: true,
  imports: [ HojaAtencionComponent, HojaInformacionComponent],
  templateUrl: './nueva-atencion.component.html',
  styleUrl: './nueva-atencion.component.sass'
})
export class NuevaAtencionComponent {

}
